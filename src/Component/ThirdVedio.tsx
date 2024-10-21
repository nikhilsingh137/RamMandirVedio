import React, { useEffect } from "react";
import Style from "./thirdvedio.module.scss";

const ThirdVedio = ({
  thirdVedioRef,
  handleThirdVedio,
  handleThirdVedioPlay,
  handleThirdVedioEnd,
}: any) => {
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
    <div className={Style.ThirdVedio}>
      <video
        ref={thirdVedioRef}
        onCanPlay={handleThirdVedioPlay}
        onEnded={handleThirdVedioEnd}
      >
        <source src="https://dvf7opio6knc7.cloudfront.net/video_v2/Mandir_Darshan.mp4" />
      </video>
      <div className={Style.button} onClick={handleThirdVedio}>
        <h2>Skip</h2>
      </div>
    </div>
  );
};

export default ThirdVedio;
