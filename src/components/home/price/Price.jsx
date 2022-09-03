import React from 'react'
import Heading from '../../common/Heading'
import './price.css'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading
            title='Select Your Package'
            subtitle=' In almost every state a real estate agent must work for or be affiliated with a real estate broker (an individual or a brokerage firm), who is more experienced and licensed to a higher degree.'
          />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
