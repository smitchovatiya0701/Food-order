import React, { useState } from "react";
import "../../styles/Header.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";

function Header() {
  const [nav, setNav] = useState(false);

  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };
  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""} `}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to={"/"} className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/section2"}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/section3"}>
                Our Menu
              </Nav.Link>
              <Nav.Link as={Link} to={"/section5"}>
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to={"/section6"}>
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to={"/section7"}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to={"/"}>
                <div className="cart">
                  <i class="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
