import React, { useEffect, useRef } from "react";
import "./Project.css";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EmergencyRecordingIcon from "@mui/icons-material/EmergencyRecording";
function Project() {
  const scrollRef = useRef();
  useEffect(() => {
    const divaccess = scrollRef.current;
    const sequres = divaccess.querySelectorAll("div");
    if (sequres) {
      const observer = new IntersectionObserver((sequres) => {
        sequres.forEach((sequere) => {
          if (sequere.isIntersecting) {
            sequere.target.classList.add("vaible");
          } else {
            sequere.target.classList.remove("vaible");
          }
        });
      });
      sequres.forEach((sequere) => observer.observe(sequere));
    }
  }, []);
  return (
    <>
      <div ref={scrollRef} className="project__container">
        <h1>PROJECTS DEMO</h1>
        <div className="project__box">
          <div className="project__box__1">
            <h3>
              <EmergencyRecordingIcon className="project__icon" />
              This is Videos Uploading Web Side
            </h3>
            <p>
              This is a sample application that demonstrates an Videos website
              using the MEAN stack. The application loads videos a MongoDB
              database and displays them. Users can select to display videos in
              a single category. Users can click on any video to get more
              information including pricing, reviews and rating. Users can
              upload any video with payment and non payment systems
            </p>
          </div>
          <div className="project__box__2">
            <div>
              <a href="https://github.com/Asadul-Islam-Udoy/video-sides">
                <button>Code</button>
              </a>
              <a href="https://video-sides.vercel.app/">
                <button>Live</button>
              </a>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiRrsP8NEUmBbG6uduab3yQIc7IVLDUuHyA&s"
              alt="images"
            />
          </div>
        </div>

        <div className="project__box">
          <div className="project__box__1">
            <h3>
              <ShoppingCartIcon className="project__icon" />
              This is Ecommerce Web Side
            </h3>
            <p>
              This is a sample application that demonstrates an E-commerce
              website using the MEAN stack. The application loads products a
              MongoDB database and displays them. Users can select to display
              products in a single category. Users can click on any product to
              get more information including pricing, reviews and rating. Users
              can select items and add them to their shopping cart
            </p>
          </div>
          <div className="project__box__2">
            <div>
              <a href="https://github.com/Asadul-Islam-Udoy/my-ecommerce-oficial-web">
                <button>Code</button>
              </a>
              <a href="https://my-ecommerce-oficial-web.vercel.app">
                <button>Live</button>
              </a>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHM48y2tL3ACmW4O095PWU5KmY6fq4An-Kg&s"
              alt="images"
            />
          </div>
        </div>

        <div className="project__box">
          <div className="project__box__1">
            <h3>
              <ReduceCapacityIcon className="project__icon" />
              This is Social Communication Web Side
            </h3>
            <p>
              This project is a full-stack social media application that has
              been developed using the MERN stack. The application includes a
              registration page that has complete validation, and users can
              upload their images for their profiles. After registering, users
              can log in to the application and access the home page.
            </p>
          </div>
          <div className="project__box__2">
            <div>
              <a href="https://github.com/Asadul-Islam-Udoy/social-communication-clone">
                <button>Code</button>
              </a>
              <a href="https://social-communication-web.vercel.app/login">
                <button>Live</button>
              </a>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73Uz6AG1YB9fdCGPY0VjY5bFj-7HDk2HGFQ&s"
              alt="images"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
