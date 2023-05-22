import React from "react";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <div className="logo">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-Logo-2007.png"
            alt="logo"
          />
        </div>
        <ul>
          <li>
            <a href="Home.html">Home</a>
          </li>
          <li>
            <a href="About.html">About us</a>
          </li>
          <li>
            <a href="Contact.html">Contact us</a>
          </li>
          <li>
            <a href="Contact.html">Cart</a>
          </li>
          <li>
            <a href="Contact.html">More</a>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Search here" />
          <button className="btn">Search</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
