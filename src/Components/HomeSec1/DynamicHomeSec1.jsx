import React from 'react'

function DynamicHomeSec1(props) {
  return (
    <>
        <div className='HomeSec1Img' style={{margin : '0'}}>
          <img src={props.HomeSec1.img} alt="" className='img-fluid mx-auto'/>
        </div>
    </>
  )
}

export default DynamicHomeSec1