import React from "react";
import { Navbar, Container, Form, FormControl } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <a href="">Shopping Cart</a>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a Product"
            className="m-auto"
          ></FormControl>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
