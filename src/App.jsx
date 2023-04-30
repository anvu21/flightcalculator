import {BrowserRouter} from 'react-router-dom';
import React, { useState } from "react";
import {About, Contact, Experience, Feedbacks, Hero,Navbar,Tech,Works,StarsCanvas} from './components'

const  App=() =>{
  const [carbon, setCarbon] = useState(0);
  const handleCarbonChange = (newCarbon) => {
    setCarbon(newCarbon);

    console.log("Check "+carbon)
  };
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gradient-to-r from-sky-900 via-sky-700 to-sky-900">
      <Navbar/>

          <div className="">
            <Hero carbon={carbon} onCarbonChange={handleCarbonChange} />
            <About carbon={carbon}/>

          </div>
            <Experience/>
            

            <div className="relative z-0">
              <Contact/>
            </div>
            <StarsCanvas/>


      </div>

    </BrowserRouter>
  )
}

export default App
