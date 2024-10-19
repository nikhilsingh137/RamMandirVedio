import React from "react";
import Style from "./blog.module.scss";

export interface IType {
  handleBlog: any;
  handlleHeader: any;
}

const Blog: React.FC<IType> = ({ handleBlog, handlleHeader }) => {
  return (
    <>
      <div className={Style.Blog}>
        <div className={Style.Image}>
          <img
            src="https://www.digitalrammandir.com/wp-content/uploads/2024/02/unnamed-Ram-Mandir.png"
            alt=""
          />
          <div className={Style.bottomText}>
            <h2>Religion Tech- The new disruptor for a Spiritual India</h2>
          </div>
        </div>
        <div className={Style.text}>
          <div className={Style.header}>
            <h2>Our Blogs</h2>
            <button onClick={handleBlog}>View All</button>
          </div>
          <div className={Style.FullDetail}>
            <div className={Style.content}>
              <span>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2024/02/unnamed-5.png"
                  alt=""
                />
              </span>
              <div className={Style.mainbox}>
                <p>
                  Reinforcing Devotees’ Connection to Faith and Culture through
                  Digital Realm
                </p>
                <h2 onClick={handlleHeader}>Digital Ram Mandir</h2>
              </div>
            </div>
            <div className={Style.content}>
              <span>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2024/02/unnamed.jpg"
                  alt=""
                />
              </span>
              <div className={Style.mainbox}>
                <p>
                  Reinforcing Devotees’ Connection to Faith and Culture through
                  Digital Realm
                </p>
                <h2>Digital Ram Mandir</h2>
              </div>
            </div>
            <div className={Style.content}>
              <span>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2024/01/unnamed-35.png"
                  alt=""
                />
              </span>
              <div className={Style.mainbox}>
                <p>
                  Reinforcing Devotees’ Connection to Faith and Culture through
                  Digital Realm
                </p>
                <h2>Digital Ram Mandir</h2>
              </div>
            </div>
            <div className={Style.content}>
              <span>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2024/01/unnamed-34.png"
                  alt=""
                />
              </span>
              <div className={Style.mainbox}>
                <p>
                  Reinforcing Devotees’ Connection to Faith and Culture through
                  Digital Realm
                </p>
                <h2>Digital Ram Mandir</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
