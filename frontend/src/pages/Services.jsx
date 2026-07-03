import React from 'react'
import ServiceCard from '../components/Services/ServiceCard'
import { services } from '../assets/data/services'

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className='grid grid-cols-3  grid_ _grid_ gap-5 lg:gap-[20px]  '>
      {services.map((item, index) => (
        <ServiceCard item={item} index={index} key={index} />
      ))}
    </div>
      </div>
    </section>
  )
}

export default Services
