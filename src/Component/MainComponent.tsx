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

const MainComponent = () => {
  const vedioRef: any = useRef(null);
  const overlayMandhirRef: any = useRef(null);
  const LoginRef: any = useRef(null);
  const thirdVedioRef: any = useRef(null);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [hide, setHide] = useState(true);
  const [overlay, setOverlay] = useState(false);
  const [video, setVediio] = useState(false);
  const [video1, setVediio1] = useState(false);
  const [video2, setVediio2] = useState(false);
  const [footer, setFooter] = useState(true);
  const [overlayMandhir, setOverlayMandhir] = useState(false);
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

  const handleOverlayVedio = () => {
    setOverlayMandhir(true);
    setVediio(hide);
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

  const handleMandhirVedio = () => {
    setVediio1(false);
    setVediio2(true);
  };

  const handleThirdVedioPlay = () => {
    if (thirdVedioRef.current) {
      thirdVedioRef.current.play();
    }
  };

  const handleThirdVedio = () => {
    setVediio2(false);
    setForm(true);
  };
  const handleLoginVedioPlay = () => {
    if (LoginRef.current) {
      LoginRef.current.play();
    }
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
        />
      )}
      {video2 && (
        <ThirdVedio
          thirdVedioRef={thirdVedioRef}
          handleThirdVedioPlay={handleThirdVedioPlay}
          handleThirdVedio={handleThirdVedio}
        />
      )}
      {form && (
        <Login
          handleLoginVedioPlay={handleLoginVedioPlay}
          LoginRef={LoginRef}
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