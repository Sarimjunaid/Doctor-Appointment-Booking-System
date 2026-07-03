import React from 'react'
import DoctorCard from '../../components/Doctors/DoctorCard'
import { doctors } from '../../assets/data/doctors'
import Testimonial from '../../components/Testimonial/Testimonial'
import { BASE_URL } from '../../config'
import UseFetchData from '../../hooks/UseFetchData'
import Loader from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'
import { useState, useEffect } from 'react'

const Doctors = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const { data: doctors, loading, error } = UseFetchData(`${BASE_URL}/doctors?query=${debouncedQuery}`);
  const handleSearch = () => {
    setQuery(query.trim());
    console.log('handle search');
  }
  useEffect(() => {
    const timeout = setTimeout(() =>{
      setDebouncedQuery(query);
    },700)
    return () => clearTimeout(timeout);
  }, [query])

  return (
    <>
    <section className='bg-[#fff9ae] '>
      <div className="container text-center">
        <h2 className='heading'>Find a Doctor</h2>
        <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between '>
          <input type="search" className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer
           placeholder:text-[#4E545F] ' placeholder='Search doctor by name or specialty'
           value={query} onChange={e => setQuery(e.target.value)} />
          <button onClick={handleSearch} className='btn mt-0 rounded-[0px] rounded-r-md py-4 px-8 '>Search</button>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        {loading && <Loader/>}
      {error && <Error/>}
        {!loading && !error && <div className='grid grid_  grid-cols-3  gap-5 lg:gap-[30px] lg:grid-col-4 '>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>}
      </div>
    </section>

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
    </>
  )
}

export default Doctors
