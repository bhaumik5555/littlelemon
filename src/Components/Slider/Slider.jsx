import React from 'react'
import SwiftSlider from 'react-swift-slider'
import image1 from '../../assets/Images/Food/1.jpg';
import image2 from '../../assets/Images/Food/2.jpg';
import image3 from '../../assets/Images/Food/3.jpg';
import image4 from '../../assets/Images/Food/4.jpg';
import image5 from '../../assets/Images/Food/5.jpg';
import image6 from '../../assets/Images/Food/6.jpeg';


const data =  [
  {'id':'1','src':image1},
  {'id':'2','src':image2},
  {'id':'3','src':image3},
  {'id':'4','src':image4},
  {'id':'5','src':image5},
  {'id':'6','src':image6},
];

const Slider = () => {
  return (
    <>
    <SwiftSlider data={data} enableNextAndPrev={false}/>
    </>
  )
}

export default Slider