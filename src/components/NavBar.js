import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import textlogo from "../../src/image/text.png";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={textlogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Text-Utils
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
