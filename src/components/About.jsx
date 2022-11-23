import React from 'react'
import me from '../assets/AK.jpg'

const About = () => {
  return (
    <div id='About' className='text-[#94d2bd] max-w-[800px] mt-[10px] w-full mx-auto text-left h-screen'>
        <div className='max-w-[800px] mt-[10px] md:ml-4 sm:text-center h-screen mx-auto lg:text-left flex flex-col justify-center'>
            <h1 className='text-[#94d2bd] text-4xl'>About&#x3a;</h1>
              <img alt="profil" src={me} class="my-16 object-cover rounded h-40 w-40"/>
            <p class='capitalize text-[#0a9396] text-2xl '>
            Hello! My name is Ankan Kundu, I am from Uttarakhand. Greetings, I am a third-year student at SRMIST. I have learned C++, C, and Python and have a quite well idea of the concept of object-oriented programming. Being an ambitious student I look forward to learning web development. Currently brushing my skills in HTML, CSS, JS and ReactJs. I also design UI/UX in Figma. I enjoy learning new technologies and implementing them. Currently I am focused on competitive coding and development and exploring new things like designing.
            I am also very interested in the fields like coding and playing indoor and outdoor games as well.
            </p>
            
        </div>
    </div>
  )
}

export default About