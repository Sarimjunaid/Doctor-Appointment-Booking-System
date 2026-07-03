import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'

const About = () => {
    return <section>
        <div className="container flex flex__col m_l">
            
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0  lg:flex-row ">
                       
                <div className='relative w-3/4  lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 '>                
                    <img  src={aboutImg} alt="" />
                    <div className='absolute z-20  w-[200px] md:w-[300px] -mt-25 ml-30  b_ '>
                        <img className='m--l' src={aboutCardImg} alt="" />
                    </div>
                </div>
                
                </div>
                
                <div className=' w-full xl:w-[670px] order-1  lg:order-2  '>
                <h2 className='heading text-[30px]'>Proud to be the one of the nations best</h2>
                <p className='text__para '>
                    For 30 years in a row, U.S. News & World Report has recognizes us 
                    as one of the best public hospitals in the Nation and #1 in 
                    Texas . Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deleniti?
                </p>
                <p className='text__para mt-[30px] '>
                    Our best is something we strive each day, caring for our 
                    patients-not looking back at what we accomplished but towards what 
                    we can do tommorrow. Providing the best . Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quis natus cupiditate corrupti !
                </p>
                <Link to="/"><button className="btn text-white">Learn More</button></Link>
                </div>
                </div>
                
        
    </section>
}

export default About
