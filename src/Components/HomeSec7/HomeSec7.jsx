import React from 'react'
import { FaGlobe, FaLaptop, FaLaptopCode, FaLightbulb, FaMobileAlt } from 'react-icons/fa';
import DynamicHomeSec7 from './DynamicHomeSec7';
import "./HomeSec7.css"

function HomeSec7() {
    const array = [
        {icon : <FaLightbulb />, h5 : 'Logical Idea' , bg : '#307ad5'},
        {icon : <FaLaptop />, h5 : 'Web Designing' , bg : '#d94da6'},
        {icon : <FaGlobe />, h5 : 'Front End Development' , bg : '#1ec1d9'},
        {icon : <FaLaptopCode />, h5 : 'Back End Development' , bg : '#10c45c'},
        {icon : <FaMobileAlt />, h5 : 'Mobile Technologies' , bg : '#bc294e'}
    ]
  return (
    <>
        <div className='container-fluid HomeSec7 text-white py-5'>
            <div className='container'>
                <h2>WHAT WILL YOU LEARN</h2>
                <div className='row pt-2 row-cols-lg-5 row-cols-md-3 row-cols-1 g-3 text-center'>
                    {
                        array.map((x,i)=>{
                            return <DynamicHomeSec7 HomeSec7={x} key={i} />
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeSec7