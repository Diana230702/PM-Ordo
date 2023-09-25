import React from "react";
import "./Navbar.css";
import logo from "../Images/logo.png";

const Navbar = () => {
  return (
    <div className="container">
      <ul>
        <li>Главная</li>
        <li>Продукция</li>
        <li>О нас </li>
        <li>Контакты</li>
      </ul>
    </div>
  );
};

export default Navbar;
