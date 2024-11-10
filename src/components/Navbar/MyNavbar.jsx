import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import NotificationIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./navbar.css";

const Header = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`header_outer_container ${show && "nav__black"}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt="Netflix Logo"
            width="100"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="button" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tvshows">TV Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#latest">Latest</Nav.Link>
            <Nav.Link href="#mylist">My List</Nav.Link>
            <Nav.Link href="#languages">Browse by Languages</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#search">
              <SearchIcon />
            </Nav.Link>
            <Nav.Link href="#notifications">
              <NotificationIcon />
            </Nav.Link>
            <Nav.Link href="#account">
              <AccountBoxIcon />
            </Nav.Link>
            <Nav.Link href="#dropdown">
              <ArrowDownIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
