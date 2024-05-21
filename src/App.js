import React from 'react';
import logo from './logo.svg';
import './App.css';
import image2 from './img/MotionArtEffect-logo.png';
import image8 from './img/motionarteffect-img8.png';
import image9 from './img/motionarteffect-img2 (1).png';
import image10 from './img/motionarteffect-img1.png';
import image11 from './img/motionarteffect-img3.png';
import image12 from './img/motionarteffect-img4.png';
import image13 from './img/motionarteffect-img5.png';
import Head from './Head';
import FirstLine from './FirstLine';
import Blocks from './Blocks';
import Footer from './Footer';
import UpperBlock from './UpperBlock';
import SmokeEffect from './SmokeEffect';

function App() {

  return (
    <>

      
      <div className="main">
        <SmokeEffect />
        <Head />
        <br />
        <br />
        <br />
        <br />

        <FirstLine />
        <br />

        <FirstText />

        <RatingSec />
        <br/>
        <MagicSec/>
        

        <UpperBlock />
        <br />
        <br />
        <br />
        <BigBlock />
        <br />
        <br />
        <br />
        <br />
        <Textdown />
        <br />
        <Blocks />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}

const Textdown = () => {
  return (
    <div className="text-down-main">
      <div className="text-down">
        <div className="text-down-h1">
          <h1>An All-Round Plugin With Powerful Features</h1>
        </div>
        <p>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
      </div>
    </div>
  );
};

const BigBlock = () => {
  return (
    <>
      <div className="BlockBig-main">
        <div className="BlockBig-struct">
          <div className="BlockBig">
            <div className="BlockBig-text">
              <h1>Supported by All Popular Browsers</h1>
              <br />
              <p>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
            </div>
            <br />
            <br />
            <img src={image8} />
          </div>
        </div>
      </div>
    </>
  );
};

const FirstText = () => {
  return (
    <>
      <div className="textFirst">
        <div className="textFirst-outer">
          <div className="textFirst-inner">
            <div className="textFirst-inner-up">
              <div className="textFirst-inner-up-color">
                <p>Transform Your Website</p>
              </div>
              <p>With Motion Art Effect</p>
            </div>
          </div>
          <div className="textFirst-inner">
            <h1>Attract Your Visitors Attention With Colorful </h1>
            <h1 className="textFirst-inner-color">Motion Art Effect</h1>
            <div className="textFirst-inner-color-p">
              <p> Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const RatingSec = () => {
  return (
    <>
      <div className="rating">
        <p>Trusted by thousands of users around the world</p>
        <div className="rating-outer">
          <div className="rating-inner">
            <div className="rating-inner-bigimg">
              <img src={image9} />
            </div>
            <div className="rating-star">
              <img src={image12} />
              <p>4.5 Score, 9 Reviews</p>
            </div>
          </div>
          <div className="rating-inner">
            <div className="rating-inner-bigimg">
              <img src={image10} />
            </div>
            <div className="rating-star">
              <img src={image12} />
              <p>4.5 Score, 9 Reviews</p>
            </div>
          </div>
          <div className="rating-inner">
            <div className="rating-inner-bigimg">
              <img src={image11} />
            </div>
            <div className="rating-star">
              <img src={image12} />
              <p>4.5 Score, 9 Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



const MagicSec=()=>{
  const MagicOnclick = () => {
    window.location.href = 'https://codecanyon.net/checkout/102334054/create_account?_ga=2.208470935.424690917.1716090852-181363489.1716090852';
  };
  return(
  <>
    <div className="Magic-Sec">
      <div className="Magic-Sec-Outer">
        <h1>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h1>
        <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
        <button onClick={MagicOnclick} >Purchase From Envato</button>
      </div>
      <img src={image13} />
    </div></>
  )
}
export default App;
