import React, { useEffect } from "react";
import Style from "./overlayclick.module.scss";

const OverlayClick = ({ handleVedio }: any) => {
  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return (
    <div className={Style.overlay}>
      <div className={Style.wrapper}>
        <div className={Style.image}>
          <span className={Style.firstImg}>
            <img
              src="https://dvf7opio6knc7.cloudfront.net/satyugImages/up-bow.png"
              alt=""
            />
          </span>
          <span className={Style.secondIMg}>
            <img
              src="https://dvf7opio6knc7.cloudfront.net/satyugImages/welcome-flag.png"
              alt=""
            />
          </span>
          <div className={Style.divide}>
            <span>
              <img
                src="https://digitalrammandir.com/wp-content/uploads/2023/12/bg1.png%22"
                alt=""
              />
            </span>
            <h2>One slogan, One name Jai Shri Ram</h2>
            <span>
              <img
                src="https://digitalrammandir.com/wp-content/uploads/2023/12/bg2.png"
                alt=""
              />
            </span>
          </div>
          <div className={Style.button}>
            <button onClick={handleVedio}>Click To Enter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayClick;
