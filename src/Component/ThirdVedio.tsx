import React from "react";
import Style from "./thirdvedio.module.scss";

const ThirdVedio = ({
  thirdVedioRef,
  handleThirdVedio,
  handleThirdVedioPlay,
}: any) => {
  return (
    <div className={Style.ThirdVedio}>
      <video ref={thirdVedioRef} onCanPlay={handleThirdVedioPlay}>
        <source src="https://dvf7opio6knc7.cloudfront.net/video_v2/Mandir_Darshan.mp4" />
      </video>
      <div className={Style.button} onClick={handleThirdVedio}>
        <h2>Skip</h2>
      </div>
    </div>
  );
};

export default ThirdVedio;
