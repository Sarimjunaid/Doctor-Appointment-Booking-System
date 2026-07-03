import React from 'react'
import { services } from '../../assets/data/services'
import ServiceCard from './ServiceCard'

const ServiceList = () => {
  return (
    <div className='grid grid-cols-3  grid_ _grid_ gap-5 lg:gap-[20px] mt-[20px] lg:mt-[35px] '>
      {services.map((item, index) => (
        <ServiceCard item={item} index={index} key={index} />
      ))}
    </div>
  )
}

export default ServiceList
