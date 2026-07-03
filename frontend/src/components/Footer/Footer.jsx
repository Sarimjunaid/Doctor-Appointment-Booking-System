import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'


const socialLinks = [
  {
    path: 'https://www.linkedin.com',
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5 ' />
  },
  {
    path: 'https://www.youtube.com',
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5 ' />
  },
  {
    path: 'https://www.github.com',
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5 ' />
  },
  {
    path: 'https://www.instagram.com',
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5 ' />
  }
]

const quickLinks01 = [
 
  {
    path: '/home',
    dispaly: 'Home'
  },
  {
    path: '/',
    dispaly: 'About Us'
  },
  {
    path: '/services',
    dispaly: 'Our Services'
  },
  {
    path: '/',
    dispaly: 'Blog'
  }
]

const quickLinks02 = [
  
  {
    path: '/find-a-doctor',
    dispaly: 'Find a Doctor'
  },
  {
    path: '/',
    dispaly: 'Request an Appointment'
  },
  {
    path: '/',
    dispaly: 'Find a Location'
  },
  {
    path: '/',
    dispaly: 'Get a Opinion'
  },
] 

const quickLinks03 = [
  {
    path: '/',
    dispaly: 'Donate'
  },
  {
    path: '/contact',
    dispaly: 'Contact Us'
  },
]

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='pb-16 pt-10 m_l '>
      <div className="container">
        <div className="flex justify-between flex__col md:flex-row flex-wrap gap-[30px] ">
          <div>
            <img src={logo} alt="Logo" />
            <p className='text-[16px] leading-7 font-[400] text-[#4E545F] mt-4 '>
              Copyright © {year} developed by Sarim all right reserved.
            </p>
            <div className='flex items-center gap-3 mt-4 '>
              {socialLinks.map((link, index) => (
                <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-[#0067FF] hover:border-none ' >
                  {link.icon}
                </Link>
              ) )}
            </div>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] text-[#181A1E] mb-6'>Quick Links</h2>
            <ul >
              {quickLinks01.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-[#4E545F]'>{item.dispaly}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] text-[#181A1E] mb-6'>I want to:</h2>
            <ul >
              {quickLinks02.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-[#4E545F]'>{item.dispaly}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] text-[#181A1E] mb-6'>Support</h2>
            <ul >
              {quickLinks03.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-[#4E545F]'>{item.dispaly}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
