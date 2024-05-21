import React from 'react'
import image2 from './img/t_500x300-removebg-preview.png'
export default function Head() {

  const handleBuyNowClick = () => {
    window.location.href = 'https://codecanyon.net/checkout/102334054/create_account?_ga=2.208470935.424690917.1716090852-181363489.1716090852';
  };
  return (
    <>
          <div className='head-upper'>
            <div className='head'>
              <div className='logo'>
                  <img src={image2}/>
                  <div className='whitetext'>envato </div>
                  <div className='greentext'>market</div>
              </div>
          <button onClick={handleBuyNowClick}>Buy Now</button>
          </div>
      </div>
    </>
  )
}
