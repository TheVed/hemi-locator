import React from 'react';
import NorthernPic from './images/NorthernHemisphere.jpg';
import SouthernPic from './images/SouthernHemisphere.jpg';

const HemisphereConfig = {
  Northern: {
    pic: NorthernPic,
    text: 'You are in Northern Hemisphere'
  },
  Southern: {
    pic: SouthernPic,
    text: 'You are in Southern Hemisphere'
  }
}

const HemisphereDisplay = ({latitude}) => {

  const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
  const text = HemisphereConfig[hemisphere].text;
  const pic = HemisphereConfig[hemisphere].pic;
  return(
    <div className='image'>
      <div>
        <img src={pic} alt='Picture' />
      </div>
      <div>
        <h1>{text}</h1>
      </div>
    </div>
  )
}

export default HemisphereDisplay;
