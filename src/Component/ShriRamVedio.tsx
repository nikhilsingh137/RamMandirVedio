import React from "react";
import Style from "./shriram.module.scss";

const ShriRamVedio = ({
  vedioRef,
  handleVedioPlay,
  handleOverlayVedio,
}: any) => {
  return (
    <div className={Style.Vedio}>
      <video ref={vedioRef} onCanPlay={handleVedioPlay} loop>
        <source src="https://dvf7opio6knc7.cloudfront.net/satyugvideos/before-game-720.mp4" />
      </video>
      <div className={Style.button} onClick={handleOverlayVedio}>
        <h2>Skip</h2>
      </div>
    </div>
  );
};

export default ShriRamVedio;
