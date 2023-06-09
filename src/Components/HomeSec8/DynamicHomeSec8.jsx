import React from 'react'

function DynamicHomeSec8(props) {
  return (
    <>
        <div className='col'>
            <div className='HomeSec8Img card rounded-0 px-0 mx-0 border-0'>
              <div className='HomeSec8overflow d-flex justify-content-center align-items-center'>
                <img src={props.HomeSec3.img} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
    </>
  )
}

export default DynamicHomeSec8