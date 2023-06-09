import React from 'react'
import Slider from 'react-slick';
import DynamicHomeSec1 from './DynamicHomeSec1';
import "./HomeSec1.css";

function HomeSec1() {

  let array = [
    {img : require('./../../Assets/Images/Carousal/oscar-career-point-banner.jpg')},
    {img : require('./../../Assets/Images/Carousal/react-js.jpg')},
    {img : require('./../../Assets/Images/Carousal/frontend-course-angular.jpg')},
    {img : require('./../../Assets/Images/Carousal/backend-node.jpg')},
    {img : require('./../../Assets/Images/Carousal/full-stack-MEAN.jpg')},
    {img : require('./../../Assets/Images/Carousal/full-stack-MERN.jpg')},
    {img : require('./../../Assets/Images/Carousal/mobile-app-development.jpg')},
    {img : require('./../../Assets/Images/Carousal/ui-ux-designing.jpg')},
    {img : require('./../../Assets/Images/Carousal/digital-marketing.jpg')}
  ]

  const settings = {
    // centerMode: true,
    centerPadding: '10px',
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    autoplay : true,
    arrows: true,
    dots: false
  }

  return (
    <div className="App container-fluid g-0" id='homsec1'>
      <Slider {...settings} className='' >
        {
          array.map((x,i)=>{
            return <DynamicHomeSec1 key={i} HomeSec1={x}/>
          })
        }
      </Slider>
    </div>
  )
}

export default HomeSec1