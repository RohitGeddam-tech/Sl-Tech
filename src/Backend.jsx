import axios from "axios";
import React, { useEffect, useState } from "react";
import Setting from "./Settings";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import ReactPaginate from "react-paginate";
// import { Alert } from "@material-ui/lab";

const Backend = () => {
  const [data, setData] = useState([]);
  // const [error, setError] = useState({});
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    type: "success",
  });

  const handleAlertClose = () => {
    setAlertState({ open: false, message: "", type: "success" });
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      const tokenData = localStorage.getItem("accessToken");
      const token = JSON.stringify(tokenData);
      const headers = {
        Authorization: `Bearer ${token.slice(1, -1)}`,
      };
      axios
        .get(`${process.env.REACT_APP_PUBLIC_URL}leads`, {
          headers: headers,
        })
        .then((res) => {
          // console.log(res);
          const info = res.data.data;
          setData(info);
          setCurrent(res.data.meta.pagination.current_page);
          setTotal(res.data.meta.pagination.total_pages);
        })
        .catch((err) => {
          // console.warn(err);
          const {
            message = "Sorry! We are unable to process your request.",
            status_code,
            errors = {},
          } = (err.response && err.response.data) || {};

          // setSuccess(false);
          // console.log(success);
          // setLoadBtn(false);

          const errArr = Object.keys(errors);
          if (status_code === 422 && errArr.length) {
            const error = {};
            errArr.forEach((key) => (error[key] = errors[key][0]));
            // setError(error);
          } else {
            setAlertState({ open: true, message, type: "error" });
          }
        });
    } else {
      window.location.href = "/#top";
    }
  }, []);

  const handlePageClick = (data) => {
    // console.log(data.selected);
    setCurrent(data.selected + 1);
  };

  return (
    <div className="back">
      <div className="head">
        {/* <h1>Orders Booked.</h1> */}
        <h1>Leads.</h1>
        <Setting />
      </div>
      <div className="container">
        <table className="mainData">
          <tbody>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Services</th>
              <th>Message</th>
            </tr>
            {data.length === 0 ? (
              <tr className="empty">
                <td>Records not found.</td>
              </tr>
            ) : null}
            {data.map((doc, i) => (
              <tr key={i}>
                <td>{`${doc.name}`}</td>
                <td>{doc.email}</td>
                <td>{doc.mobile}</td>
                {/* <td>{doc.services.map((doc) => doc).join(", ")}</td> */}
                <td>{doc.services}</td>
                <td>{doc.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="page">
          <ReactPaginate
            previousLabel="<<"
            nextLabel=">>"
            breakLabel="..."
            pageCount={total}
            marginPagesDisplayed={3}
            pageRangeDisplayed={5}
            forcePage={current - 1}
            onPageChange={handlePageClick}
            renderOnZeroPageCount={null}
            containerClassName="ui pagination menu out"
            pageClassName="ui pagination menu in"
            pageLinkClassName="item"
            previousClassName="ui pagination menu in prev"
            previousLinkClassName="item"
            nextClassName="ui pagination menu in next"
            nextLinkClassName="item"
            breakClassName="ui pagination menu in"
            breakLinkClassName="item"
            activeLinkClassName="active"
          />
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={alertState.open}
        onClose={handleAlertClose}
        autoHideDuration={5000}
      >
        <Alert
          onClose={handleAlertClose}
          severity={alertState.type}
          variant="filled"
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Backend;
