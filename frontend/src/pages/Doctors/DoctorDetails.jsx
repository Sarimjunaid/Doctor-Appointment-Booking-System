// import React from 'react'
// import { useState } from 'react'
// import doctorImg from '../../assets/images/doctor-img02.png'
// import starIcon from '../../assets/images/Star.png'
// import DoctorAbout from './DoctorAbout'
// import Feedback from './Feedback'
// import SidePanel from './SidePanel'

// const DoctorDetails = () => {
//   const [tab, setTab] = useState('about')
//   return <section>
//     <div className='max-w-[1170px] px-4 mx-auto  '>
//       <div className='grid md:grid-col-3 gap-[50px] '>
//         <div className='md:col-span-2'>
//           <div className='flex items-center gap-5'>
//             <figure className='max-w-[180px] max-h-[180px]  '>
//               <img className='w-full' src={doctorImg} alt="" />
//             </figure>
//             <div>
//               <span className='bg-[#CCF0F3] text-[#01B5C5]  py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded '>Surgeon </span>
//               <h3 className='text-[#181A1E] text-[22px] font-bold leading-9 mt-3'>Dr. John Doe</h3>
//               <div className='flex items-center gap-[6px] '>
//                 <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-[#181A1E] '>
//                   <img src={starIcon} alt="" /> 4.8
//                 </span>
//                 <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-[#4E545F] '>(272)</span>
//               </div>
//               <p className='text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px] text-[#4E545F] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Illo atque similique cum, totam iste.</p>
//             </div>
//           </div>
//           <div className='flex'>
//             <div className='  mt-[50px] border-b border-solid border-[#0066ff34]  '>
//               <button
//                 onClick={() => setTab('about')}
//                 className={`${tab === "about" && "border-b border-solid border-[#0067FF]"} py-2 px-5 mr-5 text-[16px] leading-7 text-[#181A1E] font-semibold`}
//               >About</button>
//             </div>
//             <div className='  mt-[50px] border-b border-solid border-[#0066ff34]  '>
//               <button
//                 onClick={() => setTab('feedback')}
//                 className={`${tab === "feedback" && "border-b border-solid border-[#0067FF]"} py-2 px-5  mr-5 text-[16px] leading-7 text-[#181A1E] font-semibold`}
//               >Feedback</button>
//             </div>
            
//           </div>
//           <div className='mt-[50px] '>
//             {tab === 'about' && <DoctorAbout />}
//             {tab === 'feedback' && <Feedback />}
//           </div>
//         </div>
//         <div>
//           <SidePanel />
//         </div>
//       </div>
//     </div>
//   </section>
// }

// export default DoctorDetails



import React, { useState,useEffect } from 'react'
import starIcon from '../../assets/images/Star.png'
import DoctorAbout from './DoctorAbout'
import Feedback from './Feedback'
import SidePanel from './SidePanel'
import { BASE_URL } from '../../config'
import UseFetchData from '../../hooks/UseFetchData'
import Loader from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'
import { useParams } from 'react-router-dom'

const DoctorDetails = () => {
  const [tab, setTab] = useState('about')
  const { id } = useParams()
  const { data: doctors, loading, error } = UseFetchData(`${BASE_URL}/doctors/${id}`)
  const { name,qualifications,experiences,timeSlots,reviews,bio,about, specialization,ticketPrice, averageRating, totalRating, photo } = doctors;

  return (
    <section>
      <>
      <div className="max-w-[1170px] px-4 mx-auto">
        {loading && <Loader/>}
      {error && <Error/>}
        {!loading && !error && 
          <div className="grid md:grid-cols-3 gap-[50px]">
            
            {/* Left column (Doctor Info + Tabs) */}
            <div className="md:col-span-2">
              {/* Doctor Info */}
              <div className="flex items-center gap-5">
              <figure className="max-w-[180px] max-h-[180px]">
                <img className="w-full" src={photo} alt="Doctor" />
              </figure>
              <div>
                <span className="bg-[#CCF0F3] text-[#01B5C5] py-1 px-6 lg:py-2 lg:px-6 text-[12px] lg:text-[16px] font-semibold rounded">
                  {specialization}
                </span>
                <h3 className="text-[#181A1E] text-[22px] font-bold leading-9 mt-3">
                  {name}
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] lg:text-[16px] font-semibold text-[#181A1E]">
                    <img src={starIcon} alt="Rating" /> {averageRating}
                  </span>
                  <span className="text-[14px] lg:text-[16px] font-normal text-[#4E545F]">
                    ({totalRating})
                  </span>
                </div>
                <p className="text__para text-[14px] md:text-[15px] lg:max-w-[390px] text-[#4E545F]">
                  {bio}
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab('about')}
                className={`py-2 px-5 mr-5 text-[16px] font-semibold ${
                  tab === 'about'
                    ? 'border-b-2 border-[#0067FF] text-[#0067FF]'
                    : 'text-[#181A1E]'
                }`}
              >
                About
              </button>
              <button
                onClick={() => setTab('feedback')}
                className={`py-2 px-5 text-[16px] font-semibold ${
                  tab === 'feedback'
                    ? 'border-b-2 border-[#0067FF] text-[#0067FF]'
                    : 'text-[#181A1E]'
                }`}
              >
                Feedback
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-[50px]">
              {tab === 'about' && <DoctorAbout name={name} qualifications={qualifications} experiences={experiences} about={about} />}
              {tab === 'feedback' && <Feedback reviews={reviews} totalRating={totalRating} />}
            </div>
          </div>

          {/* Right column (SidePanel) */}
          <div>
            <SidePanel doctorId={doctors._id} ticketPrice={ticketPrice} timeSlots={timeSlots} />
          </div>
        </div>}
      </div>
      </>
    </section>
  )
}

export default DoctorDetails
