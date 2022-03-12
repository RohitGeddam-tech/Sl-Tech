import React from "react";
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import account from "./images/account.svg";
import down from "./images/arrowDown.svg";
import { Button, Menu, MenuItem } from "@material-ui/core";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [name, setName] = React.useState("Admin");

  React.useEffect(() => {
    if (localStorage.getItem("name") !== null) {
      const val = localStorage.getItem("name");
      setName(val);
    } else {
      setName("Admin");
    }
  }, []);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        className="btn newDrop"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img style={{paddingRight:"15px"}} src={account} alt="account" />
        {name}
        <img style={{paddingLeft:"15px"}} src={down} alt="account" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem
          onClick={() => {
            localStorage.clear();
            setAnchorEl(null);
            window.location.href = "/#top";
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
