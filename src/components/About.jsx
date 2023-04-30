import React , { useState, useEffect } from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import pdf4 from './pic/gasoline2.gif';
import pdf2 from './pic/mobile-phone.png';
import pdf3 from './pic/seedlings.gif';

const Rectangle = ({ text, image,value}) => {
  return (
    <div className="bg-blue-500 flex justify-center items-center rounded-lg p-4 shadow-lg">
      <p className="text-xl bg-green-500 font-bold mr-4">{value} </p>
      <p className="text-xl font-bold mr-4"> {text}</p>
      <img src={image} alt="pdf" className="w-12 " />
    </div>
  );
};

const About = ({carbon}) => {
  
  const [oil, setOil] = useState(0);
  const [phone, setPhone] = useState(0);
  const [car, setCar] = useState(0);
  const [plane, setPlane] = useState(0);
  let rectangles = [
    {
      id: 1,
      text: " gallons of gasoline consumed",
      value: oil,
      image: pdf4
    },
    {
      id: 2,
      text: "gallons of diesel consumed ",
      value: car,
      image: pdf4
    },
    {
      id: 3,
      text: "number of smartphones charged ",
      value: phone,
      image: pdf2
    },
    {
      id: 4,
      text: "tree seedlings grown for 10 years",
      value: plane,
      image: pdf3
    }
  ];
  useEffect(() => {
    setOil((carbon /(8.887 * 10 **-3)).toPrecision (3));
    setPhone((carbon / (8.22 * 10 **-6)).toFixed (0));
    setCar((carbon / (10.180 * 10 **-3)).toPrecision (3));
    setPlane((carbon / (0.06)).toPrecision (3));


  }, [carbon]);

  return (
    
    
    <div>
      <div className=' bg-blue-500 mx-auto  w-3/5   items-center rounded-lg p-4 shadow-lg flex justify-center -mt-10 mb-3 text-2xl '>
       
       <div>
         <p>Carbon: {carbon} Metric Ton of CO2</p>
       </div>
       </div>


                <div className="w-full h-64 flex justify-center px-2 ">
      <div className="w-full mr-2  py-2 grid grid-cols-2 gap-4 h-full">
        {rectangles.map((rectangle) => (
          <Rectangle
            key={rectangle.id}
            text={rectangle.text}
            value={rectangle.value}
            image={rectangle.image}
          />
        ))}
      </div>
    </div>

    </div>
  )
}
//export default About
export default SectionWrapper(About, "about")