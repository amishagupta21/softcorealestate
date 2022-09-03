import React from 'react'
import Back from '../common/Back'
import Heading from '../common/Heading'
import img from '../images/about.jpg'
import './about.css'

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading
              title='Our Agency Story'
              subtitle='Check out our company story and work process'
            />

            <p>
              Real estate agents usually specialize in either commercial or
              residential real estate. Either way, they perform different
              duties, depending on whether they work for the buyer or the
              seller. Agents who work for the seller, also known as listing
              agents, advise clients on how to price the property and prepare it
              for a sale, including providing tips on last-minute improvements
              that can boost the price or encourage speedy offers.
            </p>
            <p>
              Seller agents market the property through listing services,
              networking, and advertisements. Agents who work for the buyer
              search for available properties that match the buyers price range
              and wish list. These agents often look at past sales data on
              comparable properties to help prospective buyers come up with a
              fair bid.
            </p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./im.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
