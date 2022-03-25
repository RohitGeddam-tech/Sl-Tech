import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Popup = ({ Open, Close, email, setEmail }) => {
  const checkData = [
    {
      id: 1,
      name: "Web Design",
    },
    {
      id: 2,
      name: "Web Development",
    },
    {
      id: 3,
      name: "Graphic Designing",
    },
    {
      id: 4,
      name: "Social Media Marketing",
    },
    {
      id: 5,
      name: "Video Animation",
    },
    {
      id: 6,
      name: "Others",
    },
  ];

  const [name, setName] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);
  const [text, setText] = useState("");
  //   const [textInvalid, setTextInvalid] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [show, setShow] = useState(false);
  const [valid, setValid] = useState(false);
  const [btnloading, setBtnloading] = useState(false);
  const [state, setState] = useState([]);
  const [error, setError] = useState({});
  const [stateInvalid, setStateInvalid] = useState(false);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        setNameInvalid(!e.target.validity.valid);
        break;
      case "phone":
        setPhone(e.target.value);
        // setPhoneInvalid(!e.target.validity.valid);
        if (/^[0-9]{10}$/.test(e.target.value)) {
          setPhoneInvalid(false);
        } else {
          setPhoneInvalid(true);
        }
        break;
      case "text":
        setText(e.target.value);
        // setTextInvalid(!e.target.validity.valid);
        break;
      default:
        break;
    }
    setError({});
  };

  const handleSubmit = () => {
    if (state.length <= 0) {
      setStateInvalid(true);
    } else {
      setStateInvalid(false);
    }
    if (!(nameInvalid || phoneInvalid) && state.length > 0) {
      // console.log(name, phone, state, text);
      setValid(true);
      setBtnloading(true);
      // Close(false);
    }
  };

  React.useEffect(() => {
    const services = state.map((doc) => doc.value).join(", ");
    const form = {
      name: name,
      email: email,
      mobile: phone,
      services: services,
      message: text,
    };
    if (valid) {
      axios
        .post(`${process.env.REACT_APP_PUBLIC_URL}contact-us`, form)
        .then((res) => {
          // console.log(res);
          setName("");
          setEmail("");
          setPhone("");
          setState([]);
          setText("");
          Close(false);
          setShow(true);
          setValid(false);
          setBtnloading(false);
        })
        .catch((err) => {
          // console.warn(err);
          const { status_code, errors = {} } =
            (err.response && err.response.data) || {};

          setBtnloading(false);

          const errArr = Object.keys(errors);
          if (status_code === 422 && errArr.length) {
            const error = {};
            errArr.forEach((key) => (error[key] = errors[key][0]));
            setError(error);
          }
        });
    }
  }, [valid]);

  const TextName = ` textfield ${text ? "has-value" : ""}`;

  const navigate = useNavigate();

  return (
    <>
      <Modal
        open={Open}
        center
        focusTrapped={false}
        onClose={() => {
          setName("");
          setEmail("");
          setPhone("");
          setError({});
          setState([]);
          setText("");
          setNameInvalid(false);
          setPhoneInvalid(false);
          setStateInvalid(false);
          Close(false);
        }}
        classNames="modal"
      >
        <div className="popup">
          <div className="container">
            <h2>Would you like to tell us exactly what you’re looking for?</h2>
            <div
              className={`textInput ${
                nameInvalid || error.name ? "errorInput" : ""
              }`}
            >
              <input
                className="input"
                value={name}
                type="text"
                name="name"
                pattern="^(?! )[A-Za-z ]*(?<! )$"
                required
                autoComplete="off"
                onChange={handleChange}
              />
              <label htmlFor="name">
                Your Full Name <span style={{ color: "red" }}>*</span>
              </label>
              {nameInvalid ? (
                <p className="error-text">Please provide a valid name.</p>
              ) : null}
              {error.name ? <p className="error-text">{error.name}</p> : null}
            </div>
            <div
              className={`textInput ${
                phoneInvalid || error.mobile ? "errorInput" : ""
              } `}
            >
              <input
                className="input"
                value={phone}
                type="number"
                name="phone"
                // type="tel"
                inputmode="numeric"
                required
                autoComplete="off"
                onChange={handleChange}
              />
              <label htmlFor="phone">
                Contact Number <span style={{ color: "red" }}>*</span>
              </label>
              {phoneInvalid ? (
                <p className="error-text">
                  Please provide a valid 10 digit number.
                </p>
              ) : null}
              {error.mobile ? (
                <p className="error-text">{error.mobile}</p>
              ) : null}
            </div>
            <h1>Services</h1>
            <div className="serviceCheck">
              {checkData.map((item, i) => (
                <div className="inputCheck" key={i}>
                  <label>
                    <input
                      className="input"
                      value={item.name}
                      type="checkbox"
                      name={item.name}
                      required
                      onChange={(e) => {
                        if (e.target.checked) {
                          setState([
                            ...state,
                            {
                              id: item.id,
                              value: item.name,
                            },
                          ]);
                        } else {
                          setState(
                            state.filter((people) => people.id !== item.id)
                          );
                        }
                        setStateInvalid(false);
                      }}
                    />
                    {item.name}
                  </label>
                </div>
              ))}
              {stateInvalid ? (
                <p className="error-text">Please select a service.</p>
              ) : null}
              {error.services ? (
                <p className="error-text">{error.services}</p>
              ) : null}
            </div>
            <div className="textInput">
              <textarea
                className={TextName}
                value={text}
                type="checkbox"
                name="text"
                required
                onChange={handleChange}
              />
              <label htmlFor="text">Any special requests? (Optional)</label>
              {error.email ? (
                <p className="error-text">Please provide valid details.</p>
              ) : null}
            </div>
            <div className="bottom">
              <button
                className="btn emptyBtn"
                onClick={() => {
                  setName("");
                  setEmail("");
                  setPhone("");
                  setError({});
                  setState([]);
                  setText("");
                  setNameInvalid(false);
                  setPhoneInvalid(false);
                  setStateInvalid(false);
                  Close(false);
                }}
              >
                Skip this for now
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="btn"
                disabled={btnloading}
              >
                Get a call back
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        open={show}
        center
        focusTrapped={false}
        onClose={() => setShow(false)}
        classNames="modal"
      >
        <div className="thanks">
          <h3>We’ll get back to you!</h3>
          <p>
            Please give us 24 hours. We’ll get in touch with you along with our
            tech consultants.
          </p>
          <div className="bottom">
            <button
              className="btn emptyBtn"
              onClick={() => {
                setShow(false);
                // window.location.href = "/#top";
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Back to homepage
            </button>
            <button
              className="btn blueBtn"
              onClick={() => {
                setShow(false);
                navigate("/Client", { replace: true });
              }}
            >
              View Our Portfolio
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Popup;
