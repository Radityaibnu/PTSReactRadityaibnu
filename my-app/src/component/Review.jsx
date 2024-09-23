import React from 'react'
import Reviewcard from '../layout/reviewcard'
import img1 from '../assets/pic1.png'
import img2 from '../assets/pic2.png'
import img3 from '../assets/pic3.png'

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        What our customer's say :
      </h1>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <Reviewcard img={img1} name="Sophia Azure"/>
        <Reviewcard img={img2} name="Jack Wazowkski"/>
        <Reviewcard img={img3} name="Laura Ethoria"/>
      </div>
    </div>
  )
}

export default Review
