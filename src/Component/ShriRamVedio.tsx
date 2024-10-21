import React, { useEffect } from "react";
import Style from "./shriram.module.scss";

const ShriRamVedio = ({
  vedioRef,
  handleVedioPlay,
  handleOverlayVedio,
  handleVedioEnd,
}: any) => {
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
    <div className={Style.Vedio}>
      <video
        ref={vedioRef}
        onCanPlay={handleVedioPlay}
        onEnded={handleVedioEnd}
        controls
      >
        <source src="https://dvf7opio6knc7.cloudfront.net/satyugvideos/before-game-720.mp4" />
      </video>
      <div className={Style.button} onClick={handleOverlayVedio}>
        <h2>Skip</h2>
      </div>
    </div>
  );
};

export default ShriRamVedio;
