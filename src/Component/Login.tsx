import React, { useState } from "react";
import Style from "./login.module.scss";

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

    // Clear error message when user types
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
                <button>Submit</button>
              </form>
            </div>
          </div>
          <div className={Style.right}>
            <video ref={LoginRef} onCanPlay={handleLoginVedioPlay}>
              <source src="https://dvf7opio6knc7.cloudfront.net/satyugvideos/BahumulyaWEBM.webm" />
            </video>
          </div>
        </div>
        <div className={Style.back} onClick={handleBack}>
          <h2>Back</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
