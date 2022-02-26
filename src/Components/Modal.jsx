import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Popup = ({ Open, Close }) => {
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
  //   const [invalid, setInvalid] = useState(false);
  const [state, setState] = useState([]);
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
    // setInvalid(false);
  };

  const handleSubmit = () => {
    if (state.length <= 0) {
      setStateInvalid(true);
    } else {
      setStateInvalid(false);
    }
    if (!(nameInvalid || phoneInvalid) && state.length > 0) {
      // console.log(name, phone, state, text);
      setShow(true);
      Close(false);
    } 
    // else {
    //   console.log("error");
    // }
  };

  // React.useEffect(() => {
  //   if (state.length > 0) {
  //     console.log(state);
  //   }
  // }, [state]);

  return (
    <>
      <Modal
        open={Open}
        center
        focusTrapped={false}
        onClose={() => Close(false)}
        classNames="modal"
      >
        <div className="popup">
          <div className="container">
            <h2>Would you like to tell us exactly what you’re looking for?</h2>
            <div className={`textInput ${nameInvalid ? "errorInput" : ""} `}>
              <input
                className="input"
                value={name}
                type="text"
                name="name"
                pattern="^(?! )[A-Za-z ]*(?<! )$"
                required
                onChange={handleChange}
              />
              <label htmlFor="name">
                Your Full Name <span style={{ color: "red" }}>*</span>
              </label>
              {nameInvalid ? (
                <p className="error-text">
                  We will need your name to get in touch
                </p>
              ) : null}
            </div>
            <div className={`textInput ${phoneInvalid ? "errorInput" : ""} `}>
              <input
                className="input"
                value={phone}
                type="number"
                name="phone"
                required
                onChange={handleChange}
              />
              <label htmlFor="phone">
                Contact Number <span style={{ color: "red" }}>*</span>
              </label>
              {phoneInvalid ? (
                <p className="error-text">
                  We will need your phone no. to get in touch
                </p>
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
            </div>
            <div className="textInput">
              <textarea
                className="textfield"
                value={text}
                type="checkbox"
                name="text"
                required
                onChange={handleChange}
              />
              <label htmlFor="text">Any special requests? (Optional)</label>
            </div>
            <div className="bottom">
              <button className="btn emptyBtn" onClick={() => Close(false)}>
                Skip this for now
              </button>
              <button type="button" onClick={handleSubmit} className="btn">
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
              }}
            >
              Back to homepage
            </button>
            <button
              className="btn blueBtn"
              onClick={() => {
                setShow(false);
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
