import React from 'react'
import convertTime from '../../utils/convertTime'
import { BASE_URL,token } from '../../config'
import { toast } from 'react-toastify'

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const bookinghandler = async() => {
    try{
      const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`,{
        method:'post',
        headers:{
          Authorization: `Bearer ${token} `
        }
      })
      const data = await res.json()
      if(!res.ok){
        throw new Error(data.message + 'Please try again')
      }
      if(data.session.url){
        window.location.href = data.session.url
      }
    } catch(err){
      toast.error(err.message)
    }
  }
  return (
    <div className='shadow-[0_70px_100px_0_rgba(17,12,46,0.15)] py-4 px-5 rounded-md  '>
        <div className='flex items-center justify-between  '>
          {/* <p className='text__para mt-0 font-semibold  '>Ticket Price</p> */}
          <p className='text-[15px] leading-6 text-[#4E545F] font-semibold w-[200px]  '>Ticket Price</p>
          <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-[#181A1E] font-bold '>{ticketPrice} BDT</span>
        </div>
        <div className='mt-[30px] '>
          <p className='text__para mt-0 font-semibold text-[#181A1E] w-[200px] '>Avaliable Time Slots:</p>
          <ul className='mt-3  '>
            {timeSlots?.map((item, index) => (
            <li key={index} className='flex items-center justify-between mb-2 '>
              <div className='flex'>
              <p className='text-[15px] leading-6 text-[#4E545F] font-semibold w-[100px] '>{item.day.charAt(0).toUpperCase() + item.day.slice(1)}</p>
              <p className='text-[15px] leading-6 text-[#4E545F] font-semibold w-[130px] '>{convertTime(item.startingTime)} - {convertTime(item.endingTime)}</p>
            </div>
            </li>
            ))}
          </ul>
        </div>
        <button onClick={bookinghandler} className="btn w-full rounded-md ">Book Appointment</button>
    </div>
  )
}

export default SidePanel