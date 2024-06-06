import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <div className="about__container">
        <h1>ABOUT ME</h1>
        <div className="about__box">
          <p>
            verifies whether the user of the application is authenticated or
            not. If the user is authenticated, it redirects to the home page
            otherwise, if not, it redirects to the login page. Middleware acts
            as a bridge between a request and a response. It is a type of
            filtering mechanism. This chapter explains you the middleware
            mechanism in Laravel Laravel includes a middleware that verifies
            whether the user of the application is authenticated or not. If the
            user is authenticated, it redirects to the home page otherwise, if
            not, it redirects to the login page.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
