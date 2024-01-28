import React from 'react'
import './OurChef.css'

const OurChef = () => {
  return (
    <div>
        <div className='chef-img'>
            <div className='container'>
                <div className='chef-content'>
                    <h1 className='heading-primary'>
                        our <span>chef</span>
                    </h1>

                    <p className='text-white'>
                    Award winning meals, delivered by an amazing team
                    </p>
                </div>
            </div>
        </div>

        {/* chef info  */}

        <div className='container'>
            <div className='grid-container py-md'>
                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Marcus <span>Cole</span>
                    </h3>

                    <h4>grill chef</h4>

                    <p>Aenean's good fortune needs pain. Jasmine mass. It's important to have a good customer service, a customer service provider.</p>
                </div>

                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Lisa <span>Cole</span>
                    </h3>

                    <h4>executive chef</h4>

                    <p>It's important to have a good customer service, a customer service provider. Aenean's good fortune needs pain. Jasmine mass.</p>
                </div>



                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Lara <span>Langford</span>
                    </h3>

                    <h4>CHEF DE CUISINE</h4>

                    <p>No one before. It is also important to treat the eros of the throat. Two times. But it's funny.</p>
                </div>



                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Alex <span>Deer</span>
                    </h3>

                    <h4>sous chef</h4>

                    <p>The ship is now in full swing. Now the fear of nonnummy. Free weekend shopping. I will give it to you tomorrow.</p>
                </div>
            </div>




        </div>
    </div>
  )
}

export default OurChef