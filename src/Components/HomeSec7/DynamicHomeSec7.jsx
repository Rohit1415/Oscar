import React from 'react'

function DynamicHomeSec7(props) {
  return (
    <>
        <div class="col">
            <div class="card h-100" style={{backgroundColor : props.HomeSec7.bg}}>
                <h3>{props.HomeSec7.icon}</h3>
                <div class="card-body">
                  <h6 class="card-title">{props.HomeSec7.h5}</h6>
                </div>
            </div>
        </div>
    </>
  )
}

export default DynamicHomeSec7