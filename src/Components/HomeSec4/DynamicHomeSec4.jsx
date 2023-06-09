import React from 'react'

function DynamicHomeSec4(props) {
  return (
    <>
        <div className='col'>
            <div className='HomeSec4Div'>
                <span className='my-2'>{props.HomeSec4.icon}</span>
                <p className='pb-3 fw-semibold'>{props.HomeSec4.p}</p>
            </div>
        </div>
    </>
  )
}

export default DynamicHomeSec4