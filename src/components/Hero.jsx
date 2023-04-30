import React, { useState }  from 'react'
import {motion} from 'framer-motion';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import {styles} from '../style';
//import pdfImage from "./pdf-icon.png";
//import { ComputersCanvas } from './canvas';
const Hero = ( { carbon, onCarbonChange }) => {
  const airports = [
    { name: 'John F. Kennedy International Airport', iataCode: 'JFK', coordinates: [-73.7781, 40.6413] },
    { name: 'Los Angeles International Airport', iataCode: 'LAX', coordinates: [-118.4085, 33.9416] },
    { name: 'O\'Hare International Airport', iataCode: 'ORD', coordinates: [-87.9048, 41.9742] },
    { name: 'Hartsfield-Jackson Atlanta International Airport', iataCode: 'ATL', coordinates: [-84.4277, 33.6407] },
    { name: 'Denver International Airport', iataCode: 'DEN', coordinates: [-104.6737, 39.8561] },
    { name: 'San Francisco International Airport', iataCode: 'SFO', coordinates: [-122.3892, 37.6189] },
    { name: 'Seattle-Tacoma International Airport', iataCode: 'SEA', coordinates: [-122.3088, 47.4502] },
    { name: 'Dallas/Fort Worth International Airport', iataCode: 'DFW', coordinates: [-97.0381, 32.8975] },
    { name: 'Miami International Airport', iataCode: 'MIA', coordinates: [-80.287, 25.7954] },
    { name: 'McCarran International Airport', iataCode: 'LAS', coordinates: [-115.1522, 36.0801] },
    { name: 'San Diego International Airport', iataCode: 'SAN', coordinates: [-117.1917, 32.7336] },
    { name: 'Orlando International Airport', iataCode: 'MCO', coordinates: [-81.3081, 28.4294] },
    { name: 'George Bush Intercontinental Airport', iataCode: 'IAH', coordinates: [-95.3414, 29.9844] },
    { name: 'Logan International Airport', iataCode: 'BOS', coordinates: [-71.0202, 42.3656] },
    { name: 'Philadelphia International Airport', iataCode: 'PHL', coordinates: [-75.2423, 39.8768] },
    { name: 'Baltimore/Washington International Thurgood Marshall Airport', iataCode: 'BWI', coordinates: [-76.6686, 39.1754] },
    { name: 'Washington Dulles International Airport', iataCode: 'IAD', coordinates: [-77.4565, 38.9445] },
    { name: 'Newark Liberty International Airport', iataCode: 'EWR', coordinates: [-74.1687, 40.6895] },
    { name: 'Honolulu International Airport', iataCode: 'HNL', coordinates: [-157.921, 21.3259] },
    { name: 'Chicago Midway International Airport', iataCode: 'MDW', coordinates: [-87.7519, 41.7868] }
    // ... and so on for other major airports in the US
  ];

 

  const [var1, setVar1] = useState(null);
  const [var2, setVar2] = useState(null);
  const [code1, setcode1] = useState(null);
  const [code2, setcode2] = useState(null);
  const [pinsSelectable, setPinsSelectable] = useState(true);
  const geoUrl =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";


  function handlePinClick(airportName, iataCode) {
    console.log(airportName)
    console.log(iataCode)

    //console.log(var1)
    //console.log(var2)
    if (pinsSelectable) {
      if (!var1) {
        setVar1(airportName);
        setcode1(iataCode)
        //console.log("var1")
        //console.log(var1)
      } else if (!var2 & airportName!==var1) {
        setVar2(airportName);
        setcode2(iataCode)

        console.log("var2")
        
        console.log(var2)
        setPinsSelectable(false);
       
      }
    }
  }
  function handleResetClick() {
    console.log(var1)
    console.log(var2)

    setVar1(null);
    setVar2(null);
    setcode1(null)
    setcode1(null)

    setPinsSelectable(true);
    onCarbonChange(0)

    console.log("reset")
  }
  async function sendClick() {
      
    if (var2){
    try {
      const response = await fetch("https://www.carboninterface.com/api/v1/estimates", {
        method: "POST",
        headers: {
          "Authorization": "Bearer mtiI7PX2d3YgYtLMkwAPbg",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "type": "flight",
          "passengers": 1,
          "legs": [
            {"departure_airport": code1, "destination_airport": code2 },
          ]
        })
      });
      const data = await response.json();
      console.log(data)
      const carbon_kg = await data.data.attributes.carbon_mt;
      onCarbonChange(carbon_kg)

      console.log(carbon_kg)

    } catch (error) {
      // Handle any errors here
    }
  }else{
    alert("Please select two airports")

  }
  
  //onCarbonChange(0.073)
  }

  return (
    <div >
      <header className=' w-full flex justify-center items-center flex-col -mb-5'>
    

    <h1 className='gap-4 mt-5 text-5xl font-extrabold leading-[1.15] bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent sm:text-6xl text-center'>
      Flight Carbon Calculator <br className='max-md:hidden' />
    </h1>
    <h2 className='mt-5 text-lg text-white-600 sm:text-xl text-center max-w-2xl'>
      We find your trip carbon emissions. Select the two airport you flying from and to.
    </h2>
  </header>
  <div className=' bg-blue-500 mx-auto  w-1/3   items-center rounded-lg p-4 shadow-lg flex justify-center mt-6 text-2xl '>
       
      <div>
        <p>Start: {var1}</p>
        <p>Desination: {var2}</p>
      </div>
      </div>

      <div className='w-1/2 mx-auto m flex justify-center -mt-12 -my-5'>
      <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography key={geo.rsmKey} geography={geo} stroke="#000000" fill="#DDD" />
          ))
        }
      </Geographies>
        {airports.map(airport => (
          <Marker
            key={airport.name}
            coordinates={airport.coordinates}
            onClick={() => handlePinClick(airport.name, airport.iataCode)}
            fill={var1 === airport.name || var2 === airport.name ? 'red' : 'blue'}
          >
            <circle r={4} />
          </Marker>
        ))}
      </ComposableMap>
      </div>
      <br>
      </br>
      <div className="-mt-5 flex flex-col mb-10">
    <div className="mx-auto">
    <a href='#about'>
          <button onClick={sendClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded mx-5">Find</button>
          </a>
          <button onClick={handleResetClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded mx-5">Reset</button>

          </div>
          </div>
          



    </div>   

  )
}

export default Hero