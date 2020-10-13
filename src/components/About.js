import React from 'react'
import '../styles/About.scss';
import prof from '../PROF.jpg'
import { Breakpoint } from 'react-socks';

function About() {
  return (
    <div>
      <Breakpoint large up>
        <div className='about'>
          <div className='about-left'>
            <p className='about-info'>
              Born and raised in San Francisco, I've spent the last four years in sunny Santa Cruz pursuing degree in Computer Science.
              I am an aspiring front end developer with an interest in cloud computing and I'm always looking for new opportunities 
              to learn and grow!
            
            <br></br>
            <br></br>
              Growing up, I've always had an affinity for music, design, and creating. I loved expressing my originality in
              writing stories, designing websites, building LEGOs, and singing (horrendously at first).
              My goal in the industry is to combine my lifelong passion for the arts with my engineering background to create elegant, efficient 
              technological solutions for the best possible user experience. Moreover, I hope to utilize my skills to 
              be apart of the many ongoing solutions to combat global issues in public health and climate change.
        
            <br></br>
            <br></br>
              When I'm not coding away to soulful R&B, you can find me producing music, religiously checking NBA box scores, 
              sharing my workout routines (with non-interested people), or reading. Feel free to contact me with opportunities or
              if you want to get to know me better... I'd love to hear about your workout routines.
            </p>
          </div>

          <div className='about-right'>
            <img src={prof} />
          </div>
        </div>
      </Breakpoint>
      <Breakpoint medium down>
        <div className='about'>
          <img src={prof} />
          <p className='about-info'>
            Born and raised in San Francisco, I've spent the last four years in sunny Santa Cruz pursuing degree in Computer Science.
            I am an aspiring front end developer with an interest in cloud computing and I'm always looking for new opportunities 
            to learn and grow!
          
          <br></br>
          <br></br>
            Growing up, I've always had an affinity for music, design, and creating. I loved expressing my originality in
            writing stories, designing websites, building LEGOs, and singing (horrendously at first).
            My goal in the industry is to combine my lifelong passion for the arts with my engineering background to create elegant, efficient 
            technological solutions for the best possible user experience. Moreover, I hope to utilize my skills to 
            be apart of the many ongoing solutions to combat global issues in public health and climate change.
      
          <br></br>
          <br></br>
            When I'm not coding away to soulful R&B, you can find me producing music, religiously checking NBA box scores, 
            sharing my workout routines (with non-interested people), or reading. Feel free to contact me with opportunities or
            if you want to get to know me better... I'd love to hear about your workout routines.
          </p>
        </div>
      </Breakpoint>
    </div>
  )
}

export default About
