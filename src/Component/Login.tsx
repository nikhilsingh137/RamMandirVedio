import React, { useEffect, useState } from "react";
import Style from "./login.module.scss";
import RainImg from "../img/drop-removebg-preview1.png";
import VolumeImg from "../img/volume-up.png";
import VolumeMute from "../img/mute.png";

const Login = ({ handleLoginVedioPlay, LoginRef, handleBack }: any) => {
  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
  });
  const [error, setError] = useState({
    error: "",
    error1: "",
    error2: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...data, [e.target.id.toLowerCase()]: e.target.value };
    setData(newData);

    if (e.target.id === "Name") setError({ ...error, error: "" });
    if (e.target.id === "Number") setError({ ...error, error1: "" });
    if (e.target.id === "Email") setError({ ...error, error2: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newError = { error: "", error1: "", error2: "" };
    if (data.name === "") {
      newError.error = "Name is required";
      valid = false;
    }
    if (data.number === "") {
      newError.error1 = "WhatsApp number is required";
      valid = false;
    }
    if (data.email === "") {
      newError.error2 = "Email is required";
      valid = false;
    }
    setError(newError);
    if (valid) {
      console.log("Form submitted", data);
    }
  };

  const NUM_DROPS = 60;

  const RainDrops = () => {
    return (
      <>
        {Array.from({ length: NUM_DROPS }).map((_, index) => (
          <img
            key={index}
            src={RainImg}
            alt="Rain Drop"
            className={Style.drop}
            style={{
              animationDelay: `${Math.random() * 3}s`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </>
    );
  };
  const [isMuted, setIsMuted] = useState(false);
  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (LoginRef.current) {
      LoginRef.current.muted = !isMuted;
    }
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
    <div className={Style.Login}>
      <div className={Style.wrapper}>
        <div className={Style.divide}>
          <div className={Style.left}>
            <span>
              <img
                src="https://dvf7opio6knc7.cloudfront.net/digital-logo1.png"
                alt=""
              />
            </span>
            <div className={Style.Image}>
              <RainDrops />
            </div>
            <div className={Style.formBox}>
              <form onSubmit={handleSubmit}>
                <div className={Style.formbar}>
                  <label>Name :</label>
                  <div className={Style.form}>
                    <input
                      type="text"
                      placeholder="Name"
                      value={data.name}
                      id="Name"
                      onChange={handleChange}
                    />
                    <span className={Style.error}>{error.error}</span>
                  </div>
                </div>
                <div className={Style.formbar}>
                  <label>WhatsApp :</label>
                  <div className={Style.form}>
                    <input
                      type="number"
                      placeholder="+91"
                      value={data.number}
                      id="Number"
                      onChange={handleChange}
                    />
                    <span className={Style.error}>{error.error1}</span>
                  </div>
                </div>
                <div className={Style.formbar}>
                  <label>Email ID :</label>
                  <div className={Style.form}>
                    <input
                      type="email"
                      placeholder="Example@gmail.com"
                      value={data.email}
                      id="Email"
                      onChange={handleChange}
                    />
                    <span className={Style.error}>{error.error2}</span>
                  </div>
                </div>
                <button>
                  <span>Submit</span>
                  <img
                    className={Style.firstImg}
                    src="https://dvf7opio6knc7.cloudfront.net/satyugImages/left-arrow.png"
                    alt=""
                  />

                  <img
                    className={Style.SecondImg}
                    src="https://dvf7opio6knc7.cloudfront.net/satyugImages/right-arrow.png"
                    alt=""
                  />
                </button>
                <p>*We are GDPR compliant and your data is safe.</p>
              </form>
            </div>
          </div>
          <div className={Style.right}>
            <video ref={LoginRef} onCanPlay={handleLoginVedioPlay} loop>
              <source src="https://dvf7opio6knc7.cloudfront.net/satyugvideos/BahumulyaWEBM.webm" />
            </video>
          </div>
        </div>
        <div className={Style.back} onClick={handleBack}>
          <h2>Back</h2>
        </div>
        <div className={Style.volume} onClick={toggleMute}>
          <img src={isMuted ? VolumeMute : VolumeImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
