import React from 'react'
import Navbar from './component/navbar'
import Home from './component/home'
import Dishes from './component/dishes'
import About from './component/About'
import Menu from './component/menu'
import Review from "./component/Review"
import Footer from './component/Footer'

export const App = () => {
  return (
    <div >
     <Navbar/>
     <main>
      <div id='home'>
        <Home/>
      </div>

      <div id='dishes'>
        <Dishes/>
      </div>
      <div id='about'>
        <About/>
      </div>
      <div className="menu">
        <Menu/>
      </div>
      <div className="review">
        <Review/>
      </div>
     </main>
     <div className="footer">
      <Footer/>
     </div>
    </div>
  )
}

export default App