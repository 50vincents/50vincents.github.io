import React from 'react'
import Project from './Project';
import '../styles/Work.scss'

function Work({projects}) {

  return (
    <div className='work'>
     
        <div className='work-project'>
          {projects.map(({name}) => (
            <Project source={name} />
          ))}
        </div>
      
    </div>
  )
}

export default Work
