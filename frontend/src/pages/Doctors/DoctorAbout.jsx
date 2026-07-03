import React from 'react'
import { formateDate } from '../../utils/FormateDate'

const DoctorAbout = ({ name, about, qualifications, experiences }) => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-[#181A1E]  font-semibold flex items-center gap-2 '>About of
        <span className='text-[#01B5C5] font-bold text-[24px] leading-9  '>{name}</span> </h3>
<p className='text__para w-1/2'>{about}</p>
      </div>
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-[#181A1E] font-semibold '>Education</h3>
        <ul className='pt-4 md:p-5 '>
          {qualifications?.map((item, index) =>( <li key={index} className='flex  -flex-row end md:gap-5 mb-[30px] '>
            <div><span className='text-[#01B5C5] text-[15px] leading-6 font-semibold  '>{formateDate(item.startingDate)} - {formateDate(item.endingDate)}</span>
            <p className='text-[16px] leading-6 font-medium text-[#4E545F]  '>{item.degree} sdfds</p>
            </div>
            <p className='text-[14px] mt-6.5 leading-5 font-medium text-[#4E545F]  '>{item.university}</p>
          </li> ))}
        </ul>
      </div>
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-[#181A1E] font-semibold '>Experience</h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 '>
          {experiences?.map((item, index) =>( <li key={index} className='p-4 rounded bg-[#fff9ae] w-3/4 '>
            <span className='text-[#FEB60D] text-[15px] leading-6 font-semibold '>{formateDate(item.startingDate)} - {formateDate(item.endingDate)}</span>
            <p className='text-[16px] leading-6 font-medium text-[#4E545F]  '>{item.position}</p>
            <p className='text-[14px] leading-5 font-medium text-[#4E545F]  '>{item.hospital}</p>
          </li> ))}
          
          
        </ul>
      </div>
    </div>
  )
}

export default DoctorAbout
