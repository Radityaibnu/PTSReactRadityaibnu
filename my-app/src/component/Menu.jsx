import React from 'react'
import DishesCard from '../layout/Dishescard'
import menu1 from '../assets/menu1.jpg'
import menu2 from '../assets/menu2.jpg'
import menu3 from '../assets/menu3.jpg'

export const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-content items-center lg:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10'>
        Premium Menu
      </h1>
      <div className='flex flex-wrap gap-8 justify-center'>
        <DishesCard img={menu1} title="delicious dish" price="17.99" />
        <DishesCard img={menu2} title="delicious dish" price="18.99"/>
        <DishesCard img={menu3} title="delicious dish" price="20.99"/>
      </div>
    </div>
  )
}

export default Menu
