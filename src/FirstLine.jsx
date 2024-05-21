import React from 'react'
import image2 from './img/MotionArtEffect-logo.png'
import SmokeEffect from './SmokeEffect'
export default function FirstLine() {
  const handlePurchaseNowClick = () => {
    window.location.href = 'https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891';
  };
  return (
    <>
          <div className='first-Line'>
        
              <img src={image2} />
              <div>
          <button onClick={handlePurchaseNowClick}>Purchase Now</button>
              </div>
          </div>
    </>
  )
}
