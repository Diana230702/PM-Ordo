import React from "react";
import "./Navbar.css";
// import logos from "../Images/cart.png";

const Navbar = () => {
  return (
    <div className="container">
      {/* <img src={logos} alt="/" /> */}
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
