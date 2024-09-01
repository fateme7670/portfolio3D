import React from 'react';
import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
const InfoDetail=({text,link,btn})=>{
    return(
        <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
{text}
        </p>

        <Link to={link} className='neo-brutalism-white neo-btn'>
         {btn}
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    )

}
const renderContent={
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Fateme</span>
        👋
        <br />
        A Software Engineer from IRAN  🇮🇷
      </h1>
    ),
    2:(
       <InfoDetail
       text={`          Worked with many companies 
        and picked up many skills along the way
       `}
       link={'/about'}
       btn={'Learn more'}
       />
    ),
    3:(
        <InfoDetail
        text={`          Led multiple projects to success over the years.  
        Curious about the impact?
        `}
        link={'/projects'}
        btn={' Visit my portfolio'}
        />
    ),
    4:(
        <InfoDetail
        text={`        Need a project done or looking for a dev?  
        I'm just a few keystrokes away
        `}
        link={'/contact'}
        btn={`Let's talk`}
        />
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null


 

}

export default HomeInfo;
