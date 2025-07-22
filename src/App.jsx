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

import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        timestamp: new Date()
      });

      alert("Message sent!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong. Please try again.");
    }
  };

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
            {[
              { logo: toyota, url: "https://www.partslane.com.sg/sgretail/" },
              { logo: subaru, url: "https://www.partslane.com.au/home/" },
              { logo: lexus, url: "https://www.partslane.com.hk/home/" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={item.logo} alt="brand" className="brandLogos" />
              </a>
            ))}
          </div>

        </div>
      </div>

      <div className="fourth sectionFadeIn">
        <div className="fourthWrapper">
          <div className="cmsWrapper">
            <p className="title">CMS PROJECT</p>
              <a
                href="https://www.bcnmtpoint.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link} alt="link logo" className="linkLogo" />
              </a>
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
            {[
              { icon: whatsapp, url: "https://api.whatsapp.com/send/?phone=%2B639324640186&text&type=phone_number&app_absent=0" },
              { icon: github, url: "https://github.com/lanarosedg" },
              { icon: linkedin, url: "https://www.linkedin.com/in/lanarosedg/" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={item.icon} alt="connect" className="connectLogo" />
              </a>
            ))}
          </div>

          <a href="mailto:lanarosedeguzman@gmail.com">
            <button className="email">SEND AN EMAIL</button>
          </a>
        </div>
      </div>

      <div className="message sectionFadeIn">
        <div className="messageWrapper">
          <p className="title">SEND A MESSAGE</p>
          <input
            type="text"
            className="inputName"
            placeholder="NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="inputEmail"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="inputMessage"
            placeholder="MESSAGE"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="send" onClick={handleSubmit}>SEND</button>

        </div>
      </div>

      <div className="copyright">© 2025 | LANA ROSE DE GUZMAN</div>
    </div>
  );
}

export default App;
