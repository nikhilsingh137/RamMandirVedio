import React, { useEffect } from "react";
import Style from "./overlayDarshan.module.scss";

const OverlayDarshan = ({ handleOverlayDarshan }: any) => {
  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);
  return (
    <div className={Style.overlay}>
      <div className={Style.border}></div>
      <div className={Style.wrapper}>
        <div className={Style.image}>
          <span className={Style.firstImg}>
            <img
              src="https://dvf7opio6knc7.cloudfront.net/satyugImages/up-bow.png"
              alt=""
            />
          </span>
          <span className={Style.secondImg}>
            <img
              src="https://images.bhaskarassets.com/thumb/2048x0/web2images/web-frontend/3D-Ram-Mandir/new-main-bg-v1-desktop-hi.jpg"
              alt=""
            />
          </span>

          <div className={Style.button} onClick={handleOverlayDarshan}>
            <button>Click To Darshan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayDarshan;
