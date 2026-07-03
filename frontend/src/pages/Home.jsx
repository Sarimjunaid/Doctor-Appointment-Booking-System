import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'
import featureImg from '../assets/images/feature-img.png'
import videoIcon from '../assets/images/video-icon.png'
import avatorIcon from '../assets/images/avatar-icon.png'
import DoctorList from '../components/Doctors/DoctorList'
import faqImg from '../assets/images/faq-img.png'
import FaqList from '../components/Faq/FaqList'
import Testimonial from '../components/Testimonial/Testimonial'

const Home = () => {
  return (
    <>
      <section className='hero__section pt-[15px] 2xl:h-[800px] m_l '>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] justify-between '>
            <div>
              <div className='lg:w-[570px] m_l'>
                <h1 className='text-[36px] leading-[46px] text-[#181A1E] font-[800] md:text-[60px] md:leading-[60px] '>
                  We help patients <br /> live a healthy, <br /> longer life.
                </h1>
                <p className='text__para text-xl'>We help patients navigate the complex, often overwhelming landscape of modern healthcare by providing compassionate, patient-centered guidance, cutting-edge medical insights, and unwavering support at every single step of their unique recovery journey.</p>
                <Link to='/doctors' className='btn text-white inline-flex items-center justify-center'>Request an Appointment</Link>                
              </div>
              <div className='mt-[20px] lg:mt-[70px] flex m_l flex__col lg:flex-row  gap-5 lg:gap-[30px] '>
                <div>
                  <h2 className='text-[28px] leading-[56px] text-[#181A1E] font-[700] lg:text-[36px] lg:leading-[54px] '>
                    30+
                  </h2>
                  <span className='w-[100px] h-2 bg-[#FEB60D] rounded-full block mt-[-14px] '></span>
                  <p className='text__para mt-2'>Years of Experience</p>
                </div>

                <div>
                  <h2 className='text-[28px] leading-[56px] text-[#181A1E] font-[700] lg:text-[36px] lg:leading-[54px] '>
                    15+
                  </h2>
                  <span className='w-[100px] h-2 bg-[#9771FF] rounded-full block mt-[-14px] '></span>
                  <p className='text__para mt-2'>Clinc Locations</p>
                </div>

                <div>
                  <h2 className='text-[28px] leading-[56px] text-[#181A1E] font-[700] lg:text-[36px] lg:leading-[54px] '>
                    100%
                  </h2>
                  <span className='w-[100px] h-2 bg-[#01B5C5] rounded-full block mt-[-14px] '></span>
                  <p className='text__para mt-2'>Patient Satisfaction</p>
                </div>
              </div>
            </div>
            <div className='flex gap-[30px] lg:-mt-130 justify-end items-center  '>
              <div >
                <img className='h-86 w-fit' src={heroImg01} alt="" />
              </div>
              <div >
                <img className='mb-10 h-44 mt-6 ' src={heroImg02} alt="" />
                <img className='h-44' src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto  '>
            <h2 className='text-center font-[700] text-[30px] leading-[38px] '>
              Providing the best <br /> medical services
            </h2>
            <p className='text__para mt-1 text-center'>World-class care for everyone. Our health System offers unmatched, expert health care.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] '>
            <div className='flex flex__col'>
              <div className='py-[30px] px-5 '>
                <div className='flex size-24 -mt-6 items-center  justify-center ml-24 _m_l'> <img className='m-r m_r ' src={icon01} alt="" /> </div>
                <div className='mt-[20px] '>
                  <h2 className='text-[20px] leading-2 text-[#181A1E] font-[700] text-center  '>
                    Find a Doctor
                  </h2>
                  <p className='text-[16px] leading-5 text-sm text-[#4E545F] font-[400] mt-4 text-center '>World-class care for everyone. Our health System  offers unmatched, expert health care. From the lab to  the clinic.</p>
                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full  border border-solid border-[#181A1E] mt-[15px] mx-auto flex items-center justify-center group hover:bg-[#0067FF] hover:border-none '>
                    <BsArrowRight className='group-hover:text-white w-6 h-5 ' />
                  </Link>
                </div>
              </div>
              <div className='py-[30px] px-5'>
                <div className='flex size-24 -mt-6 items-center justify-center ml-24 '> <img className='m-r -m_l m_r ' src={icon02} alt="" /> </div>
                <div className='mt-[20px] '>
                  <h2 className='text-[20px] leading-2 text-[#181A1E] font-[700] text-center  '>
                    Find a Location
                  </h2>
                  <p className='text-[16px] leading-5 text-sm text-[#4E545F] font-[400] mt-4 text-center '>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to  the clinic.</p>
                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full  border border-solid border-[#181A1E] mt-[15px] mx-auto flex items-center justify-center group hover:bg-[#0067FF] hover:border-none '>
                    <BsArrowRight className='group-hover:text-white w-6 h-5 ' />
                  </Link>
                </div>
              </div>
              <div className='py-[30px] px-5'>
                <div className='flex size-24 -mt-6 items-center justify-center ml-24 '> <img className='m-r -m_l m_r' src={icon03} alt="" /> </div>
                <div className='mt-[20px] '>
                  <h2 className='text-[20px] leading-2 text-[#181A1E] font-[700] text-center  '>
                    Book Appointment
                  </h2>
                  <p className='text-[16px] leading-5 text-sm text-[#4E545F] font-[400] mt-4 text-center '>World-class care for everyone. Our health System  offers unmatched, expert health care. From the lab to the clinic.</p>
                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full  border border-solid border-[#181A1E] mt-[15px] mx-auto flex items-center justify-center group hover:bg-[#0067FF] hover:border-none '>
                    <BsArrowRight className='group-hover:text-white w-6 h-5 ' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <About />

      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto  '>
            <h2 className='text-center heading '>
              Our medical services
            </h2>
            <p className='text__para mt-1 text-center'>World-class care for everyone. Our health System offers unmatched, <br /> expert health care.</p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* {Feature section} */}
      <section>
        <div className="container m_l">
          <div className='flex justify-between flex__col items-center flex-row '>
            <div className='xl:w-[670px]  '>
              <h2 className='heading'>
                Get virtual treatment <br /> anytime.
              </h2>
              <ul className='pl-4'>
                <li className="text__para">
                  1.Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2.Search for your physicians here, and contact their office.
                </li>
                <li className="text__para">
                  3.View our physicians who are accepting new patients, use the online <br /> scheduling  tool to select an appointment time.
                </li>
              </ul>
              <Link to='/'>
                <button className="btn">Learn More</button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0 ">
              <img src={featureImg} className='w-3/4 m_l_' alt="" />
              <div className=' w-[178px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 p_b _p_b lg:pt-3 lg:px-4 pb-[26px] rounded-[10px] '>
                <div className='flex items-center justify-between '>
                  <div className=' flex items-center gap-[6px] lg:gap-3 '>
                    <p className='flex leading-[10px] text-[14px] lg:leading-5 text-[#181A1E] font-[600] '>
                      Tue, 24
                    </p>
                    <p className=' leading-[10px]  text-[14px] lg:leading-5 text-[#4E545F] font-[600] '>
                      10:00AM
                    </p>
                  </div>
                  <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-[#FEB60D] rounded py-1 px-[6px] lg:py-3 lg:px-[9px] '>
                    <img src={videoIcon} alt="" />
                  </span>
                </div>
                <div className='w-[76px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[10px] leading-[8px] lg:text-[12px] lg:leading-4 text-[#01B5C5] font-[500] mt-4 rounded-full '>
                  Consultation
                </div>
                <div className='flex items-center gap-[8px] mt-2 lg:mt-[18px] '>
                  <img src={avatorIcon} alt="" />
                  <h4 className='text-[13px] leading-3 lg:leading-[22px] font-[700] text-[#181A1E] '>
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {Feature section end} */}

      {/* {Our great doctors} */}
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto  '>
            <h2 className='text-center heading '>
              Our great doctors
            </h2>
            <p className='text__para mt-1 m_l text-center'>View our physicians who are accepting new patients, use the online <br /> scheduling  tool to select an appointment time.</p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* {Our great doctors} */}

      {/* {Faq section} */}
      <section>
        <div className='container flex flex__col flex_col   m_l'>
          <div className='flex justify-between gap-[50px] lg:gap-0 ' >
            <img className='  w-[70%] ' src={faqImg} alt="" />
          </div>
          <div className='w-2/4 w_f _w_f '>
            <h2 className='heading  '>Most questions by our beloved patients</h2>
            <FaqList />
          </div>
        </div>
      </section>
      {/* {Faq section} */}

      {/* {testimonial} */}
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto  '>
            <h2 className='text-center heading '>
              What our patients say
            </h2>
            <p className='text__para mt-1 m_l text-center'>View our physicians who are accepting new patients, use the online <br /> scheduling  tool to select an appointment time.</p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* {testimonial} */}
    </>
  )
}

export default Home
