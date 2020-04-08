import React from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import MenuComponents from "./components/MenuComponents";

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponents></MenuComponents>
    </div>
  );
}

export default App;
