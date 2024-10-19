import React from "react";
import Style from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={Style.Footer}>
      <div className={Style.wrapper}>
        <div className={Style.Image}>
          <span>
            <img
              src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/ftr-logo.png"
              alt=""
            />
          </span>
          <h2>Powered by Satyug ©</h2>
          <h3>Satyug Life Foundation Satyug Labs Pvt Ltd</h3>
        </div>
        <div className={Style.navbar}>
          <ul>
            <li>
              <a href="#/">Blog</a>
            </li>
            <li>
              <a href="#/">Contact Us</a>
            </li>
            <li>
              <a href="#/">About Satyug</a>
            </li>
            <li>
              <a href="#/">Privacy Policy</a>
            </li>
            <li>
              <a href="#/">Terms of Services</a>
            </li>
          </ul>
        </div>
        <div className={Style.mainbox}>
          <div className={Style.Icon}>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className={Style.selectLanguage}>
            <select>
              <option>Hindi</option>
              <option>English</option>
              <option>Gujrati</option>
              <option>Tamil</option>
              <option>Bengali</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
