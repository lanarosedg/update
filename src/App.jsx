// App.jsx
import { useEffect } from 'react';
import './App.css';

import toyota from './assets/toyota.png';
import subaru from './assets/subaru.png';
import lexus from './assets/lexus.png';
import link from './assets/link.png';
import leaves from './assets/leaves.png';
import linkedin from './assets/linkedin.png';
import whatsapp from './assets/whatsapp.png';
import github from './assets/github.png';

import react from './assets/react.png';
import node from './assets/node-js.png';
import java from './assets/java.png';
import csharp from './assets/c-sharp.png';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.sectionFadeIn');
    sections.forEach((section, index) => {
      section.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <div className="parent">
      {[...Array(28)].map((_, i) => (
        <div key={i} className={`grid${i + 1}`}></div>
      ))}

      <div className="first sectionFadeIn">
        <div className="firstWrapper">
          <p className="orbitronGreen">INTUITIVE. RELIABLE. FUTURE-PROOF</p>
          <p className="racingSmall">THAT’S WHAT</p>
          <p className="name">LANA ROSE</p>
          <p className="racingBig">BUILDS</p>
        </div>
      </div>

      <div className="second sectionFadeIn">
        <div className="techWrapper">
          <div className="secondWrapper">
            <p className="title">TECH STACK</p>
            <div className="contentWrapper">
              <p className="content">REACT.JS</p>
              <p className="content">NODE.JS</p>
              <p className="content">SPRING BOOT</p>
              <p className="content">C#</p>
            </div>
          </div>
          <div className="stackLogoWrapper">
            <img src={react} alt="React" className="stackLogo reactLogo" /> &nbsp; &nbsp;
            <img src={node} alt="Node.js" className="stackLogo nodeLogo" /> &nbsp; &nbsp;
            <br /> <br />
            <img src={java} alt="Java" className="stackLogo javaLogo" /> &nbsp; &nbsp;
            <img src={csharp} alt="C#" className="stackLogo csharpLogo" />
          </div>

        </div>
      </div>

      <div className="third sectionFadeIn">
        <div className="thirdWrapper">
          <p className="brands">BRANDS <br />WORKED <br /> WITH</p>
          <div className="brandLogoWrapper">
            {[toyota, subaru, lexus].map((logo, index) => (
              <img key={index} src={logo} alt="brand" className="brandLogos" />
            ))}
          </div>
        </div>
      </div>

      <div className="fourth sectionFadeIn">
        <div className="fourthWrapper">
          <div className="cmsWrapper">
            <p className="title">CMS PROJECT</p>
            <img src={link} alt="link logo" className="linkLogo" />
          </div>
          <div className="cmsStackWrapper">
            <p className="content">WORDPRESS</p>
            <p className="content">WIX</p>
          </div>
        </div>
      </div>

      <div className="fifth sectionFadeIn">
        <div className="fifthWrapper">
          A <span className="developer">DEVELOPER</span> WITH A <span className="designer">DESIGNER'S</span> EYES
        </div>
      </div>

      <div className="sixth sectionFadeIn">
        <div className="sixthWrapper">
          <img src={leaves} alt="leaf logo" className="leafLogo" />
          <div className="lifeWrapper">
            <p className="title">LIFE OUTSIDE</p>
            <p className="content">START UP RECRUITER</p>
            <p className="content">PROGRAMMING <br /> COLLEGE INSTRUCTOR</p>
          </div>
        </div>
      </div>

      <div className="seventh sectionFadeIn">
        <div className="seventhWrapper">
          <p className="title">LET'S CONNECT</p>
          <div className="connectLogoWrapper">
            {[whatsapp, github, linkedin].map((icon, index) => (
              <img key={index} src={icon} alt="connect" className="connectLogo" />
            ))}
          </div>
          <button className="email">SEND AN EMAIL</button>
        </div>
      </div>

      <div className="message sectionFadeIn">
        <div className="messageWrapper">
          <p className="title">SEND A MESSAGE</p>
          <input type="text" placeholder="NAME" className="inputName" />
          <input type="email" placeholder="EMAIL" className="inputEmail" />
          <textarea placeholder="MESSAGE" className="inputMessage" />
          <button className="send">SEND</button>
        </div>
      </div>

      <div className="copyright">© 2025 | LANA ROSE DE GUZMAN</div>
    </div>
  );
}

export default App;
