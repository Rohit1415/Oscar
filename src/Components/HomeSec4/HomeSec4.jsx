import React from 'react'
import { FaBookOpen, FaChalkboardTeacher, FaHandsHelping, FaLaptop, FaLaptopCode, FaMoneyBillAlt, FaUserCheck, FaUserGraduate } from 'react-icons/fa';
import DynamicHomeSec4 from './DynamicHomeSec4';
import "./HomeSec4.css";

function HomeSec4() {
    let array = [
        {icon :  <FaChalkboardTeacher />, p : 'Expert Professionals'},
        {icon :  <FaLaptopCode />, p : 'Corporate Training'},
        {icon :  <FaHandsHelping />, p : 'Complete Hands On'},
        {icon :  <FaBookOpen />, p : 'Job Oriented Syllabus'},
        {icon :  <FaUserGraduate />, p : '100% Job Assistance'},
        {icon :  <FaUserCheck />, p : 'Mock Interviews'},
        {icon :  <FaMoneyBillAlt />, p : 'Affordable Fee'},
        {icon :  <FaLaptop />, p : 'Free Demo Available'},
    ]
  return (
    <>
        <div className='container HomeSec4 py-5'>
            <h2>WHY TRAIN WITH US?</h2>
            <div className='row row-cols-lg-4 row-cols-md-2 row-cols-1 text-center'>
                {
                    array.map((x,i) => {
                        return <DynamicHomeSec4 key={i} HomeSec4={x}/>
                    })
                }
            </div>
        </div>
    </>
  )
}

export default HomeSec4