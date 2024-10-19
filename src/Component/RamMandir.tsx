import React from "react";
import Style from "./ramMandir.module.scss";

const RamMandir = ({ handleOverlay }: any) => {
  return (
    <div className={Style.Header}>
      <div className={Style.wrapper}>
        <div className={Style.Image}>
          <img
            src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/banner_logo.png"
            alt=""
          />
        </div>
        <div className={Style.text}>
          <h2>Digital Ram Mandir</h2>
          <p>
            If you have not been able to go to Ayodhya yet, then let us together
            build a digital temple of Lord Shri Ram and have darshan of Ram Lala
            while sitting at home.
          </p>
          <div className={Style.button}>
            <button onClick={handleOverlay}>Enter Mandir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RamMandir;
