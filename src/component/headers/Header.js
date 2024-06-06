import React from "react";
import "./Header.css";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
function Header() {
  return (
    <>
      <div className="header__container">
        <div className="header__box">
          <div>
            <div className="me__image__section">
              <img src="/images/boss.jpg" alt="images" />
            </div>
            <div className="name__email__section">
              <div>
                <h1>Md Asadul Islam</h1>
              </div>
              <div className="email__section">
                <span>
                  <ForwardToInboxIcon className="emai__name__icon" />
                  Email : <a href="">mdasadulkhan3032@gmail.com</a>
                </span>
                <br />
                <span>
                  <PhoneIphoneIcon className="emai__name__icon" />
                  Phone : <a>++0174-0333257 or ++0161-2485250</a>
                </span>
              </div>
            </div>
          </div>
          <div className="header__title">
            <div>
              <WavingHandIcon className="hi__icon" />
              <h1>This Is Portfolio Web Side</h1>
              <h3>Full Stack Junior Web Developer</h3>
            </div>
            <div id="Abouts" className="about__me__section">
              <h5>About Me</h5>
              <p>
                Ever since the first time I saw the source code of a webpage, I
                was intrigued by the way these seemingly complex symbols
                transformed into a functional and visually appealing interface.
                I consider myself a problem solver, always excited by the
                opportunity to overcome a new challenge.
              </p>
            </div>
          </div>
        </div>
        <div className="title__images">
          <div>
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="images"
            />{" "}
          </div>
          <div>
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-g2zknp5rVroM3sl_16OUpbHIFJ1dxPlKG-8NwPPZw&s"
              alt="images"
            />{" "}
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3Ddx8uvpERVdntm2jRd0iTBR29Sn9mCYA3tdi1_SbQ&s"
              alt="images"
            />{" "}
          </div>
          <div>
            <img
              src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg"
              alt="images"
            />{" "}
          </div>
          <div>
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png"
              alt="images"
            />{" "}
          </div>
          <div>
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_caEwvBl3nlRbAnoG5Zj5QUjfOZ16vnKNn-2NIYMqwDBjgJQFwGiEH0fWxK7wwDuP9Q&usqp=CAU"
              alt="images"
            />{" "}
          </div>
          <div>
            {" "}
            <img
              src="https://www.zend.com/sites/default/files/styles/social_preview_image/public/image/2020-04/image-blog-mysql-php.jpg?itok=j341L3Fk"
              alt="images"
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
