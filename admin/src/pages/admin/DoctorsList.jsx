import React, { useContext, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { AdminContext } from '../../context/AdminContext'


function DoctorsList() {

  const {doctors, aToken, getAllDoctors, changeAvailability} = useContext(AdminContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if(aToken){
      getAllDoctors()
    }
  }, [aToken])

  return (
    <div>
      <h1 className="text-2xl text-gray-900 m-5">All Doctors</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center px-3 sm:px-0 md:px-10 lg:px-20 pt-5 gap-y-6 ">
        {doctors.map((doctor, index) => (
          <div
            // onClick={() => navigate(`/appointment/${doctor._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-2 transition-all duration-500 min-w-40"
            key={index}
          >
            <img
              className="bg-blue-50 hover:bg-[#5f6fff]"
              src={doctor.image}
              alt="Dr-image"
            />
            <div className="p-4">
              <p className="text-sm font-medium text-gray-900 text-nowrap">
                {doctor.name}
              </p>
              <p className="text-xs text-gray-600 ">{doctor.speciality}</p>

              <div className="mt-2 text-sm flex gap-1">
                <input
                  onChange={() => changeAvailability(doctor._id)}
                  type="checkbox"
                  checked={doctor.available}
                />
                <p>Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsList