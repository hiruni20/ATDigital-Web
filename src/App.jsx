import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Second from './Components/Second'
import Footer from './Components/Footer'


function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <div id="home">
          <Home/>
        </div>
        <div id="second">
          <Second/>
        </div>
        <div id="footer">
          <Footer/>
        </div>
        
      </main>
    </div>
  )
}

export default App


