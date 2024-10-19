import React, { useRef } from "react";
import Style from "./about.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const About = () => {
  const handleThumbScroll = (index: any) => {
    const thumbsWrapper = document.querySelector(".carousel .thumbs-wrapper");
    const selectedThumb = document.querySelectorAll(".carousel .thumb")[index];

    if (selectedThumb && thumbsWrapper) {
      selectedThumb.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };
  return (
    <div className={Style.About}>
      <div className={Style.wrapper}>
        <div className={Style.AboutDetail}>
          <div className={Style.Blank}></div>
          <div className={Style.text}>
            <h2>About Us</h2>
            <p>
              Digital Ram Mandir is brought to you by Satyug Labs Private
              Limited, headquartered in New Delhi. It was founded in 2023 by a
              team of seasoned well-networked entrepreneurs together with a
              talented set of technical engineers to deliver spiritual content
              and experiences in the form of immersive activities and engaging
              stories, perfectly suited for the digital age and using digital
              money(i.e Bitcoin), so that people stay connected to their roots,
              traditions, culture, and spirituality. Satyug Life Foundation,
              headquartered in New Delhi was also founded in 2023 and aimed at
              providing donations to Mandir Trusts, upkeep of gaushalas,
              treatment of cancer-ridden children, maintenance of old age homes,
              and organizing Cultural activities suited for the digital age. We
              also intend to educate and encourage users to experience first
              hand the POWER of Bitcoin (World’s most perfected engineered
              cross-border instant settlement money)
            </p>
          </div>
        </div>
        <div className={Style.Vision}>
          <div className={Style.header}>
            <div className={Style.divide}>
              <span>
                <img
                  src="https://digitalrammandir.com/wp-content/uploads/2023/12/bg1.png%22"
                  alt=""
                />
              </span>
              <h2>Our Vision</h2>
              <span>
                <img
                  src="https://digitalrammandir.com/wp-content/uploads/2023/12/bg2.png"
                  alt=""
                />
              </span>
            </div>
            <p>
              Digital Ram mandir is Satyug’s first vision to connect Indians to
              our Suryavanshi roots and culture. Eventually, Satyug will
              implement its full vision by introducing a new segment for the
              consumption of religious content, perfectly suited for the digital
              age and using digital money(i.e Bitcoin), thereby also promoting
              Sanatan Dharma’s ideals to the entire World. We will make it
              possible through the power of our endless treasure trove of
              mythological stories and the rich texts of our Puranas, Vedas,
              Mahabharat, Bhagavad Gita, Rigveda, Ram Charit Manas etc…
            </p>
          </div>
          <div className={Style.SlideImage}>
            <Carousel
              className={Style.OwlTheme}
              infiniteLoop
              showThumbs
              showStatus={false}
              showIndicators={false}
              transitionTime={1000}
              swipeable={false}
              dynamicHeight={false}
              useKeyboardArrows={true}
              emulateTouch={false}
              onChange={handleThumbScroll}
            >
              <span>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide1.jpg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide2.jpg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide3.jpg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide4.jpg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide5.jpg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide6.jpg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide7.jpg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide8.jpg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide10.jpg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide11.jpg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide13.jpg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide14.jpg"
                  alt=""
                />
              </span>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
