import React from 'react'
import Heading from '../../common/Heading'
import './recent.css'
import RecentCard from './RecentCard'

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading
            title='Recent Property Listed'
            subtitle='An agreement or arrangement under which real property is marketed through a service or association composed of several agents with a commission from the sale of a property shared between the selling agent and the agent that initiates the listing of it.'
          />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
