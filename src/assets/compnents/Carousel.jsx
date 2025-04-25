import React, { useEffect } from "react";
import { useState } from "react";
import cars from "../DB/cars";


function Caruosel () {

const [current , setCurrent] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {setCurrent((prevVal) => (prevVal+1)% cars.length);
}, 6000);

return () => clearInterval(interval);
}, [cars.length])

    return(
    <>
    <div className="flex justify-center ">
     <div className="flex flex-col items-center bg-white w-[1100px] h-full p-0 rounded-2xl shadow-lg ">


     
    {cars.map((car, index) => (
      <div className={current === index ? "flex" : "hidden"}>
        <img src={car.photo} alt={car.title} width={500} key={index} />

          <div className=" flex flex-col w-[600px]">
           <h1 className="my-5 mx-7 font-trirong font-medium text-3xl">{car.title}</h1>
            <div className="bg-gray-300 w-[550px] h-[0.5px] mx-7 "></div>
             <div className="flex justify-between my-5 mx-7">
        
        <h2>Current Bid: {car.bid}</h2>

        <h2>Ends In: {car.ends}</h2>
             </div>
    <div className="bg-gray-300 w-[550px] h-[0.5px] mx-7 "></div>
        <p className="my-5 mx-7 text-justify text-gray-500">{car.desc}</p>
    
        </div>
      </div>
            ))}
            
     </div>
    </div>
    </>
    )
    
    

}

export default Caruosel