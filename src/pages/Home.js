import React, { useEffect, useRef } from "react";
import "./Home.css";
import Navbar from "../component/navbar/Navbar";
import Header from "../component/headers/Header";
import Skills from "../component/skills/Skills";
import About from "../component/about/About";
import Project from "../component/project/Project";
import Contract from "../component/contact/Contract";
function Home() {
    const scrollRef = useRef();
    useEffect(()=>{
     const divaccess = scrollRef.current;
     const sequres = divaccess.querySelectorAll('div');
     if(sequres){
        const observer = new IntersectionObserver((sequres)=>{
            sequres.forEach((sequere) => {
               if(sequere.isIntersecting){
                sequere.target.classList.add('vaible')
               }
               else{
                sequere.target.classList.remove('vaible')
               } 
            });
        })
        sequres.forEach((sequere) => observer.observe(sequere));
     }
    },[])
  return (
    <>
      <div  className="home__container">
        <img
          src="https://plus.unsplash.com/premium_photo-1670963025018-27dd11a9b0ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxwb3J0Zm9saW8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
          alt="images"
        />
        <div className="navbar__section">
          <Navbar />
        </div>
        <div id="Home" className="header__section">
          <Header />
        </div>
        {/* <div id="Abouts" className="about__section">
          <About />
        </div> */}
       <div className="non__vaible">
        <div   id="Skills" className="skills__section">
          <Skills />
        </div>
        <div id="Projects" className="projects__section">
          <Project/>
        </div>
        <div id="Contract" className="contract__section">
          <Contract scrollRef={scrollRef} />
        </div>
       </div>
      </div>
    </>
  );
}

export default Home;
