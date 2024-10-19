import React from "react";
import Style from "./overlayMandir.module.scss";

const OverlayMandhir = ({ handleOverlayMandhirData }: any) => {
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
          <span className={Style.secondImg}>
            <img
              src="https://dvf7opio6knc7.cloudfront.net/collective_p2/Ram%20Mandir%20ka%20Nirmaan.png"
              alt=""
            />
          </span>

          <div className={Style.button} onClick={handleOverlayMandhirData}>
            <button>Click To Enter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayMandhir;
