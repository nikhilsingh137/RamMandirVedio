import React from "react";
import Style from "./success.module.scss";
import Blog from "./Blog";

const Success = ({ handleBlog, handleHeader }: any) => {
  return (
    <div className={Style.Success}>
      <div className={Style.wrapper}>
        <div className={Style.mapRoad}>
          <span>
            <img
              src="https://digitalrammandir.com/wp-content/uploads/2023/12/bg1.png%22"
              alt=""
            />
          </span>
          <h2>Roadmap to Success</h2>
          <span>
            <img
              src="https://digitalrammandir.com/wp-content/uploads/2023/12/bg2.png"
              alt=""
            />
          </span>
        </div>
        <div className={Style.data}>
          <div className={Style.date}>
            <h2>January</h2>
            <h3>2024</h3>
            <p>Launch at the onset of Pran Pratishtha at Ram Mandir</p>
          </div>
          <div className={Style.date}>
            <h2>December</h2>
            <h3>2025</h3>
            <p>Add Upanishads, Bhagavad Gita and Mahabharata Chapters</p>
          </div>
        </div>
        <div className={Style.Image}>
          <img
            src="https://digitalrammandir.com/wp-content/uploads/2023/12/Group-1000003003.png"
            alt=""
          />
        </div>
        <div className={Style.divide}>
          <div className={Style.time}>
            <h2>December</h2>
            <h3>2023</h3>
            <p>The WebPage</p>
          </div>
          <div className={Style.time}>
            <h2>December</h2>
            <h3>2023</h3>
            <p>The WebPage</p>
          </div>
          <div className={Style.time}>
            <h2>December</h2>
            <h3>2023</h3>
            <p>The WebPage</p>
          </div>
          <div className={Style.time}>
            <h2>December</h2>
            <h3>2023</h3>
            <p>The WebPage</p>
          </div>
        </div>
        <Blog handleBlog={handleBlog} handlleHeader={handleHeader} />
      </div>
    </div>
  );
};

export default Success;
