import React from "react";
import Setting from "./Settings";

const array = [
  {
    name: "Rohit",
    email: "rohitgeddam0@gmail.com",
    mobile: 9167654339,
    service: ["design", "graphic"],
    text: "the development of shycosafe is what we as a client want",
  },
  {
    name: "Rohit",
    email: "rohitgeddam0@gmail.com",
    mobile: 9167654339,
    service: ["design", "graphic"],
    text: "the development of shycosafe is what we as a client want",
  },
  {
    name: "Rohit",
    email: "rohitgeddam0@gmail.com",
    mobile: 9167654339,
    service: ["design", "graphic"],
    text: "the development of shycosafe is what we as a client want",
  },
];

const Backend = () => {
  return (
    <div className="back">
      <div className="head">
        <h1>Orders Booked.</h1>
        <Setting />
        {/* <button
          className="btn"
          onClick={() => (window.location.href = "/#top")}
        >
          Log Out
        </button> */}
      </div>
      <div className="container">
        <table className="mainData">
          <tbody>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Services</th>
              <th>Text</th>
            </tr>
            {array.length === 0 ? (
              <tr className="empty">
                <td>Records not found.</td>
              </tr>
            ) : null}
            {array.map((doc, i) => (
              <tr key={i}>
                <td>{`${doc.name}`}</td>
                <td>{doc.email}</td>
                <td>{doc.mobile}</td>
                <td>{doc.service.map((doc) => doc).join(", ")}</td>
                <td>{doc.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Backend;
