import React, { useEffect, useRef } from "react";
import "./Skills.css";
function Skills() {
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
      <div ref={scrollRef} className="skill__container">
        <h1>SKILLS</h1>
        <div className="skill__box">
          <div className="skill__items__1">
            <h3>Programming Languages</h3>
            <li>Javascript</li>
            <li>Php</li>
            <li>Python</li>
            <li>Html</li>
            <li>Css</li>
            <li>Sql</li>
          </div>
          <div className="skill__items__2">
            <h3>Frameworks && Libraries</h3>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>Redux.js</li>
            <li>laravel</li>
            <li>Bootstrap</li>
            <li>Jquery</li>
          </div>
          <div className="skill__items__3">
            <h3>Databases</h3>
            <li>MondoDB</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </div>
          <div className="skill__items__4">
            <h3>Development Tools</h3>
            <li>Git</li>
            <li>GitHub</li>
            <li>Visual Studio Code</li>
            <li>NPM</li>
          </div>
          <div className="skill__items__5">
            <h3>Additional Skills</h3>
            <li>Problem Solving and Debugging</li>
            <li>Responsive Design and Cross-Browser Compatibility</li>
            <li>Solid Understanding Of Web Development Principles</li>
            <li>Ms Word</li>
            <li>Power Point</li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
