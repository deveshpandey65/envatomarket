import React from 'react'

import image5 from './img/motionarteffect-img10.png'
import image6 from './img/motionarteffect-img11.png'
export default function UpperBlock() {
  return (
    <>

          <div className='text-down-main'>
              <div className='text-down-h'>
                  <div className='text-down-h2'>
                      <h1>Apply On Any Section Or Enable For Whole Page</h1>
                  </div>
              </div>
          </div>
          <br />

          <div className='upper-block-main'>
              <div className='first-block'>
                  <div className='upper-block'>
                      <div className='upper-block-made'>
                          <div className='upper-block-text'>
                              <h1>Apply On Section</h1>
                              <p>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                          </div>
                          <div className='upper-block-image'>
                              <img src={image6} />

                          </div>
                      </div>
                  </div>
              </div>

              <div className='second-block'>
                  <div className='upper-block'>
                      <div className='upper-block-made'>
                          <div className='upper-block-text'>
                              <h1>Apply On Page</h1>
                              <p>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
                          </div>
                          <div className='upper-block-image'>
                              <img src={image5} />

                          </div>
                      </div>
                  </div>
              </div>

          </div></>
  )
}
