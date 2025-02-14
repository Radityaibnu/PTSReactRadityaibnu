import React from 'react'
import  Button  from '../layout/Button'

export const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/hero.jpg')] bg-cover bg-no-repeat ">
    <div className=" w-full lg:w-2/3 space-y-5">
      <h1 className=" text-backgroundColor font-semibold text-6xl">
        Elevate Your Inner Foodie with Every Bite.
      </h1>
        <p className=" text-backgroundColor">
        A taste you'll remember.
        </p>
        <div>
            <Button title="Order Now"/>
        </div>
      </div>
    </div>
  )
}

export default Home
