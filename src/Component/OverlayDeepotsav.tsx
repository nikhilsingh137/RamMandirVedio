import React, { useEffect } from "react";
import Style from "./overlayDepotsav.module.scss";

const OverlayDeepotsav = ({ handleDeepotsavVideo }: any) => {
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
            <video muted autoPlay loop>
              <source
                src={`${process.env.PUBLIC_URL}/ShriRam-dewwali-vedio.webm`}
              />
            </video>
          </span>

          <div className={Style.button} onClick={handleDeepotsavVideo}>
            <button>Click To Deepotsav</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayDeepotsav;
