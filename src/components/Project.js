import React from 'react'
import '../styles/Project.scss'
import { Breakpoint } from 'react-socks';

// on hover display name
// click pop up box w desc and link
// maybe demo

function Project({source}) {
  return (
    <div className='project'>     
      <Breakpoint large up>
        <div className='project-container'>
          <img className='project-image' src={source}/>
        </div>
      </Breakpoint>
      <Breakpoint medium down>
        <div className='project-container'>
          <img className='project-image' src={source}/>
        </div>
      </Breakpoint>
    </div>
  )
}

export default Project
