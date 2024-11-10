import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import NotificationIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../Header/header.css";

const MyNavbar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Navbar.Brand href="#">MyApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <div className="header-left d-md-flex">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TVShows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Latest</Nav.Link>
            <Nav.Link href="#">MyList</Nav.Link>
            <Nav.Link href="#">Browse by Languages</Nav.Link>
          </div>
          <div className="header-right d-md-flex ">
            <Nav.Link href="#">
              <SearchIcon />
            </Nav.Link>
            <Nav.Link href="#">
              <NotificationIcon />
            </Nav.Link>
            <Nav.Link href="#">
              <AccountBoxIcon />
            </Nav.Link>
            <Nav.Link href="#">
              <ArrowDownIcon />
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
