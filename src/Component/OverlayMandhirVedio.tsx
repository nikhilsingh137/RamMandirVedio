import React, { useEffect, useState } from "react";
import Style from "./overlaymandhirvedio.module.scss";

const OverlayMandhirVedio = ({
  overlayMandhirRef,
  overlayMandhirVedioPlay,
  handleMandhirVedio,
  handleOverlayMandhirEnd,
}: any) => {
  const [isZooming, setIsZooming] = useState(true);
  const handleTouchOrClick = () => {
    setIsZooming(false);
  };

  const handleMouseEnter = () => {
    setIsZooming(false);
  };

  const handleMouseLeave = () => {
    setIsZooming(true);
  };

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
    <div className={Style.Vedio}>
      <video
        ref={overlayMandhirRef}
        onCanPlay={overlayMandhirVedioPlay}
        onEnded={handleOverlayMandhirEnd}
      >
        <source src="https://dvf7opio6knc7.cloudfront.net/satyugvideos/Construction.mp4" />
      </video>
      <div
        className={`${Style.button} ${isZooming ? Style.zoom : ""}`}
        onTouchStart={handleTouchOrClick}
        onClick={handleTouchOrClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2 onClick={handleMandhirVedio}>Continue To Activity</h2>
      </div>
    </div>
  );
};

export default OverlayMandhirVedio;
