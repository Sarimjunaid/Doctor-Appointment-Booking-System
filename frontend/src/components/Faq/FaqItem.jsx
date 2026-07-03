import React from 'react'
import { useState } from 'react'
import { AiOutlineMinus,AiOutlinePlus } from 'react-icons/ai'

const FaqItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className=' p-2 rounded-[12px] border border-solid border-[#D9DCE2] mb-4 cursor-pointer '>
        <div className='flex items-center justify-between gap-5 ' onClick={toggleAccordion} >
            <h4 className='text-[14px] leading-7 lg:text-[18px]  text-[#181A1E] '>{item.question}</h4>
            <div className={` ${isOpen && 'bg-[#0067FF] text-white border-none'} w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center `} >
                {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
        </div>
        {isOpen && (
            <div className='mt-4'>
                <p className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-[#4E545F] '>{item.content}</p>
            </div>
        )}
    </div>
  )
}


export default FaqItem
