import React, { useEffect } from "react";
import Style from "./deepotsavvideo.module.scss";

const DeepotsavVideo = ({
  DeepotsavVideoRef,
  handleDeepotsavVideoSkip,
  handleDeepotsavVideoPlay,
  handleDeepotsavVedioEnd,
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
        ref={DeepotsavVideoRef}
        onCanPlay={handleDeepotsavVideoPlay}
        onEnded={handleDeepotsavVedioEnd}
      >
        <source
          src={`${process.env.PUBLIC_URL}/ayodhyawale ayodhya explore rammandir ayodhyadeepotsav  Ayodhya Deepotsav Ayodhya Deepotsav Ram Mandir Diwali .mp4`}
        />
      </video>
      <div className={Style.button} onClick={handleDeepotsavVideoSkip}>
        <h2>Skip</h2>
      </div>
    </div>
  );
};

export default DeepotsavVideo;
