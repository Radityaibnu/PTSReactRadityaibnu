import React from 'react'
import img from '../assets/about.png'
import Button from '../layout/Button'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-centern items-center lg:px-32 px-5 '>
      <img src={img} alt="" />

    <div className='space-y-4 lg:pt-14'>
        <h1 className='font-semibold text-4xl text-center md:textstart'>Why Choose Us ?</h1>
        <p>
            We use the highest quality ingredient here with affordable prize 
        </p>
        <p>
            try good food with a greet service and flexibility in FooderWeb
        </p>
        <div className='flex justify-center lg:justify-start'>
            <Button title="Learn More"/>
        </div>
    </div>
    </div>
  )
}

export default About
