import { useState } from 'react'
import './App.css'

import toyota from './assets/toyota.png';
import subaru from './assets/subaru.png';
import lexus from './assets/lexus.png';
import link from './assets/link.png';
import leaves from './assets/leaves.png';
import linkedin from './assets/linkedin.png';
import whatsapp from './assets/whatsapp.png';
import github from './assets/github.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="parent">
      <div className="grid1"></div>
      <div className="grid2"></div>
      <div className="grid3"></div>
      <div className="grid4"></div>
      <div className="grid5"></div>
      <div className="grid6"></div>
      <div className="grid7"></div>
      <div className="grid8"></div>
      <div className="grid9"></div>
      <div className="grid10"></div>
      <div className="grid11"></div>
      <div className="grid12"></div>
      <div className="grid13"></div>
      <div className="grid14"></div>
      <div className="grid15"></div>
      <div className="grid16"></div>
      <div className="grid17"></div>
      <div className="grid18"></div>
      <div className="grid19"></div>
      <div className="grid20"></div>
      <div className="grid21"></div>
      <div className="grid22"></div>
      <div className="grid23"></div>
      <div className="grid24"></div>
      <div className="grid25"></div>
      <div className="grid26"></div>
      <div className="grid27"></div>
      <div className="grid28"></div>

      <div className="first">
        <div className="firstWrapper">
          <p className="orbitronGreen">
            INTUITIVE. RELIABLE. FUTURE-PROOF
          </p>
          <p className="racingSmall">
            THAT’S WHAT
          </p>
          <p className="name">
            LANA ROSE
          </p>
          <p className="racingBig">
            BUILDS
          </p>
        </div>
      </div>

      <div className="second">
        <div className="secondWrapper">
          <p className="title">
            TECH STACK
          </p>
          <div className="contentWrapper">
            <p className="content">REACT.JS</p>
            <p className="content">NODE.JS</p>
            <p className="content">SPRING BOOT</p>
            <p className="content">C#</p>
          </div>
        </div>
      </div>

      <div className="third">
        <div className="thirdWrapper">
          <p className="brands">
            BRANDS <br />WORKED <br /> WITH
          </p>
          <div className="brandLogoWrapper">
            <img 
              src={toyota}
              alt="" 
              className="brandLogos" 
            />
            <img 
              src={subaru}
              alt="" 
              className="brandLogos" 
            />
            <img 
              src={lexus}
              alt="" 
              className="brandLogos" 
            />
          </div>
        </div>
      </div>

      <div className="fourth">
        <div className="fourthWrapper">
          <div className="cmsWrapper">
            <p className="title">
              CMS PROJECT
            </p>
            <img 
              src={link}
              alt="" 
              className="linkLogo" 
            />
          </div>
          <div className="cmsStackWrapper">
            <p className="content">WORDPRESS</p>
            <p className="content">WIX</p>
          </div>
        </div>
      </div>

      <div className="fifth">
        <div className="fifthWrapper">
          A &nbsp;
          <span className="developer">
            DEVELOPER&nbsp;
          </span>
          WITH A &nbsp;
          <span className="designer">
            DESIGNER'S
          </span>
          &nbsp; EYES
        </div>
      </div>

      <div className="sixth">
          <div className="sixthWrapper">
            <img 
              src={leaves}
              alt="" 
              className="leafLogo" 
            />

            <div className="lifeWrapper">
              <p className="title">LIFE OUTSIDE</p>
              <p className="content">START UP RECRUITER</p>
              <p className="content">PROGRAMMING <br />
              COLLEGE INSTRUCTOR</p>
            </div>
          </div>
        </div>

        <div className="seventh">
          <div className="seventhWrapper">
            <p className="title">LET'S CONNECT</p>
            <div className="connectLogoWrapper">
              <img 
                src={whatsapp}
                alt="" 
                className="connectLogo" 
              />

              <img 
                src={github}
                alt="" 
                className="connectLogo" 
              />

              <img 
                src={linkedin}
                alt="" 
                className="connectLogo" 
              />
            </div>
            <button className="email">
              SEND AN EMAIL
            </button>
          </div>
        </div>

        <div className="message">
          <div className="messageWrapper">
            <p className="title">
              SEND A MESSAGE
            </p>
            <input type="text" placeholder='NAME' className='inputName' />
            <input type="email" placeholder='EMAIL' className="inputEmail" />
            <textarea type="text" placeholder='MESSAGE' className="inputMessage" />
            <button className="send">
              SEND
            </button>
          </div>
        </div>

        <div className="copyright">
          © 2025 | LANA ROSE DE GUZMAN
        </div>
    </div>
    </>
  )
}

export default App
