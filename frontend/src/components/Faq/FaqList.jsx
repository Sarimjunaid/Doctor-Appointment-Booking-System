import React from 'react'
import {faq} from '../../assets/data/faq'
import FaqItem from './FaqItem'

const FaqList = () => {
  return (
    <div>
      <ul className='mt-[38px]'>
        {faq.map((item, index) => (
          <FaqItem item={item} key={index} />
        ))}
      </ul>
    </div>
  )
}

export default FaqList
