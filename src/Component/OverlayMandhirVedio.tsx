import React from "react";
import Style from "./overlaymandhirvedio.module.scss";

const OverlayMandhirVedio = ({
  overlayMandhirRef,
  overlayMandhirVedioPlay,
  handleMandhirVedio,
  handleOverlayMandhirEnd,
}: any) => {
  return (
    <div className={Style.Vedio}>
      <video
        ref={overlayMandhirRef}
        onCanPlay={overlayMandhirVedioPlay}
        onEnded={handleOverlayMandhirEnd}
      >
        <source src="https://dvf7opio6knc7.cloudfront.net/satyugvideos/Construction.mp4" />
      </video>
      <div className={Style.button}>
        <h2 onClick={handleMandhirVedio}>Skip</h2>
      </div>
    </div>
  );
};

export default OverlayMandhirVedio;
