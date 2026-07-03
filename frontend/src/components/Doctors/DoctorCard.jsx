import React from 'react'
import starIcon from '../../assets/images/Star.png'
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const DoctorCard = ({ doctor }) => {
    const { name, specialization, avgRating, totalRating, photo, experiences } = doctor;
    return (
        <div className='p-3 lg:p-5 '>
            <div>
                <img src={photo} className='w-full' alt="" />
            </div>
            <h2 className='text-[20px] leading-[30px] lg:leading-9 mt-3 lg:mt-5 text-[#181A1E] font-[700] '>{name}</h2>
            <div className='mt-2 lg:mt-4 flex items-center justify-between '>
                <span className=' bg-[#CCF0F3] py-1 px-2  lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 text-[#01B5C5] font-semibold  '>
                    {specialization}
                </span>
                <div className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-[#181A1E] '>
                    <img src={starIcon} alt="" />
                    <span>{avgRating}</span>
                    <span className='font-[400] text-[#4E545F] '>({totalRating})</span>
                </div>
            </div>
            <div className='mt-4 '>
                {/* <span className='font-[500] text-[14px] leading-6 text-[#4E545F] '>
                    Total Patients: <span className='font-[700]'>+{totalPatients}</span>
                </span> */}
                <br />
                <span className=' font-[500] text-[14px] leading-6 text-[#4E545F] '>
                    Hospital: <span className='font-[700]'>At {experiences && experiences[0]?.hospital}</span>
                </span>
                                <Link to={`/doctors/${doctor._id}`} className=' mt-4  items-center w-[44px] h-[44px] rounded-full  border border-solid border-[#181A1E]  flex  justify-center group hover:bg-[#0067FF] hover:border-none '>
                                    <BsArrowRight className='group-hover:text-white w-6 h-5 ' />
                                </Link>
            </div>
        </div>
    )
}

export default DoctorCard
