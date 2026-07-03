import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvator from '../../assets/images/patient-avatar.png'
import { HiStar } from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className='mt-[30] lg:mt-[55px] m_l '>
      <Swiper pagination={{ clickable: true }} modules={[Pagination]} spaceBetween={30} slidesPerView={1} breakpoints={
        {
          640: {
            slidesPerView: 1,
            spaceBetween: 0
          },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
      } >
        <SwiperSlide  >
          <div className='py-[10px] px-5 rounded-3 flex items-center gap-[13px]  '>
            
            <img  src={patientAvator} alt="" />
            
            <div>
              <h4 className='text-[18px] leading-[30px] font-semibold text-[#181A1E] '>John Doe</h4>
              <div className='flex items-center gap-[2px] '>
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
              </div>
              </div>
            </div>
            <p className='text-[16px]  leading-7 text-[#4E545F] font-[400] '>"I have taken medical servies from them. They are providing the best services."</p>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className='py-[10px] px-5 rounded-3 flex items-center gap-[13px] '>
            
            <img  src={patientAvator} alt="" />
            
            <div>
              <h4 className='text-[18px] leading-[30px] font-semibold text-[#181A1E] '>John Doe</h4>
              <div className='flex items-center gap-[2px] '>
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
              </div>
              </div>
            </div>
            <p className='text-[16px]  leading-7 text-[#4E545F] font-[400] '>"I have taken medical servies from them. They are providing the best services."</p>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className='py-[10px] px-5 rounded-3 flex items-center gap-[13px] '>
            
            <img  src={patientAvator} alt="" />
            
            <div>
              <h4 className='text-[18px] leading-[30px] font-semibold text-[#181A1E] '>John Doe</h4>
              <div className='flex items-center gap-[2px] '>
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
              </div>
              </div>
            </div>
            
            <p className='text-[16px] leading-7  text-[#4E545F] font-[400] '>"I have taken medical servies from them. They are providing the best services."</p>
          
        </SwiperSlide>
        <SwiperSlide >
          <div className='py-[10px] px-5 rounded-3 flex items-center gap-[13px] '>
            
            <img  src={patientAvator} alt="" />
            
            <div>
              <h4 className='text-[18px] leading-[30px] font-semibold text-[#181A1E] '>John Doe</h4>
              <div className='flex items-center gap-[2px] '>
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
                <HiStar className='text-[#FFD700] w-[18px] h-5 ' />
              </div>
              </div>
            </div>
            
            <p className='text-[16px] leading-7 text-[#4E545F] font-[400] '>"I have taken medical servies from them. They are providing the best services."</p>
          
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial
