import React from 'react'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-img container'>
        <div className='hero-content'>
            <h1 className='heading-primary'>
                <span>welcome</span> 
            </h1>

            <p className='text-white'>The best gourmet restaurant available in India.</p>

            <p className='text-white'>
                Book online or call <span className='special-word'>(555)123-4667</span>
            </p>
        </div>
    </div>
  )
}

export default Hero