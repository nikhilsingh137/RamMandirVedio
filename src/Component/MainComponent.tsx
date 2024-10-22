import React, { useRef, useState } from "react";
import RamMandir from "./RamMandir";
import About from "./About";
import Success from "./Success";
import BlogDetail from "./BlogDetail";
import CustomTab from "./Tab";
import Footer from "./Footer";
import BlogDetail1 from "./BlogDetail1";
import OverlayClick from "./OverlayClick";
import ShriRamVedio from "./ShriRamVedio";
import OverlayMandhir from "./OverlayMandhir";
import OverlayMandhirVedio from "./OverlayMandhirVedio";
import ThirdVedio from "./ThirdVedio";
import Login from "./Login";
import OverlayDarshan from "./OverlayDarshan";
import DrashanVedio from "./DrashanVedio";
import OverlayDeepotsav from "./OverlayDeepotsav";
import DeepotsavVideo from "./DeepotsavVideo";

const MainComponent = () => {
  const vedioRef: any = useRef(null);
  const overlayMandhirRef: any = useRef(null);
  const LoginRef: any = useRef(null);
  const thirdVedioRef: any = useRef(null);
  const DeepotsavVideoRef: any = useRef(null);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [hide, setHide] = useState(true);
  const [overlay, setOverlay] = useState(false);
  const [video, setVediio] = useState(false);
  const [video1, setVediio1] = useState(false);
  const [video2, setVediio2] = useState(false);
  const [footer, setFooter] = useState(true);
  const [overlayMandhir, setOverlayMandhir] = useState(false);
  const [darshan, setDarshan] = useState(false);
  const [darshanVedio, setDarshanVedio] = useState(false);
  const [buttonShow, setButtonShow] = useState(false);
  const [overlayDeepotsav, setOverlayDeepotsav] = useState(false);
  const [overlayDeepotsavVedio, setOverlayDeepotsavVideo] = useState(false);
  const [form, setForm] = useState(false);
  const handleBlog = () => {
    setShow(true);
    setHide(false);
    setShow1(false);
    window.scrollTo(0, 0);
  };
  const handleHeader = () => {
    setShow1(true);
    setShow(false);
    setHide(false);
    window.scrollTo(0, 0);
  };

  const handleOverlay = () => {
    setHide(false);
    setOverlay(true);
  };

  const handleVedio = () => {
    setVediio(true);
    setOverlay(false);
    setFooter(false);
  };

  const handleVedioPlay = () => {
    if (vedioRef.current) {
      vedioRef.current.play();
    }
  };

  const handleVedioEnd = () => {
    setOverlayMandhir(true);
    setVediio(false);
  };

  const handleOverlayVedio = () => {
    setOverlayMandhir(true);
    setVediio(false);
  };

  const handleOverlayMandhirData = () => {
    setVediio1(true);
    setOverlayMandhir(false);
  };

  const overlayMandhirVedioPlay = () => {
    if (overlayMandhirRef.current) {
      overlayMandhirRef.current.play();
    }
  };

  const handleOverlayMandhirEnd = () => {
    setVediio1(false);
    setVediio2(true);
  };

  const handleMandhirVedio = () => {
    setVediio1(false);
    setVediio2(true);
  };

  const handleThirdVedioPlay = () => {
    if (thirdVedioRef.current) {
      thirdVedioRef.current.play();
    }
  };

  const handleThirdVedioEnd = () => {
    setVediio2(false);
    setDarshan(true);
  };

  const handleThirdVedio = () => {
    setVediio2(false);
    setDarshan(true);
  };

  const handleOverlayDarshan = () => {
    setDarshan(false);
    setDarshanVedio(true);
  };

  const handleDarshanVedioSkip = () => {
    setDarshanVedio(false);
    setOverlayDeepotsav(true);
    setButtonShow(false);
  };

  const handleDeepotsavVideo = () => {
    setOverlayDeepotsavVideo(true);
    setOverlayDeepotsav(false);
  };

  const handleDeepotsavVideoPlay = () => {
    if (DeepotsavVideoRef.current) {
      DeepotsavVideoRef.current.play();
    }
  };
  const handleDeepotsavVedioEnd = () => {
    setOverlayDeepotsavVideo(false);
    setForm(true);
  };
  const handleDeepotsavVideoSkip = () => {
    setOverlayDeepotsavVideo(false);
    setForm(true);
  };

  const handleLoginVedioPlay = () => {
    if (LoginRef.current) {
      LoginRef.current.play();
    }
  };

  const handleBack = () => {
    setHide(true);
    setForm(false);
  };
  return (
    <>
      {show && <BlogDetail />}
      {show1 && <BlogDetail1 />}
      {overlay && <OverlayClick handleVedio={handleVedio} />}
      {video && (
        <ShriRamVedio
          vedioRef={vedioRef}
          handleVedioPlay={handleVedioPlay}
          handleOverlayVedio={handleOverlayVedio}
          handleVedioEnd={handleVedioEnd}
        />
      )}
      {overlayMandhir && (
        <OverlayMandhir handleOverlayMandhirData={handleOverlayMandhirData} />
      )}
      {video1 && (
        <OverlayMandhirVedio
          overlayMandhirRef={overlayMandhirRef}
          overlayMandhirVedioPlay={overlayMandhirVedioPlay}
          handleMandhirVedio={handleMandhirVedio}
          handleOverlayMandhirEnd={handleOverlayMandhirEnd}
        />
      )}
      {video2 && (
        <ThirdVedio
          thirdVedioRef={thirdVedioRef}
          handleThirdVedioPlay={handleThirdVedioPlay}
          handleThirdVedio={handleThirdVedio}
          handleThirdVedioEnd={handleThirdVedioEnd}
        />
      )}
      {darshan && (
        <OverlayDarshan handleOverlayDarshan={handleOverlayDarshan} />
      )}
      <DrashanVedio
        vedio={darshanVedio}
        setVedio={setDarshanVedio}
        handleDarshanVedioSkip={handleDarshanVedioSkip}
        buttonShow={buttonShow}
        setButtonShow={setButtonShow}
      />
      {overlayDeepotsav && (
        <OverlayDeepotsav handleDeepotsavVideo={handleDeepotsavVideo} />
      )}
      {overlayDeepotsavVedio && (
        <DeepotsavVideo
          DeepotsavVideoRef={DeepotsavVideoRef}
          handleDeepotsavVideoSkip={handleDeepotsavVideoSkip}
          handleDeepotsavVideoPlay={handleDeepotsavVideoPlay}
          handleDeepotsavVedioEnd={handleDeepotsavVedioEnd}
        />
      )}
      {form && (
        <Login
          handleLoginVedioPlay={handleLoginVedioPlay}
          LoginRef={LoginRef}
          handleBack={handleBack}
        />
      )}
      {hide && (
        <>
          <RamMandir handleOverlay={handleOverlay} />
          <About />
          <Success handleBlog={handleBlog} handleHeader={handleHeader} />
          <CustomTab />
        </>
      )}
      {footer && <Footer />}
    </>
  );
};

export default MainComponent;
