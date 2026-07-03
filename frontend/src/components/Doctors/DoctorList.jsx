import React from 'react'
import DoctorCard from './DoctorCard'
import { BASE_URL } from '../../config'
import UseFetchData from '../../hooks/UseFetchData'
import Loader from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'

const DoctorList = () => {
  const { data: doctors, loading, error } = UseFetchData(`${BASE_URL}/doctors`)

  return (
    <>
      {loading && <Loader/>}
      {error && <Error/>}
    { !loading && !error &&  <div div className='grid grid_  grid-cols-3  gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] '>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor._id} doctor={doctor} />
      ))}
      </div>}
    </>
  )
}

export default DoctorList

    