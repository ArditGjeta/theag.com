import React, { useEffect } from "react";
import { useState } from "react";
import cars from "../DB/cars";


function Caruosel () {

const [current , setCurrent] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {setCurrent((prevVal) => (prevVal+1)% cars.length);
}, 9000);

return () => clearInterval(interval);
}, [cars.length])



    return(
    <>
    <div className="flex justify-center">
        <div className=" flex-col">
  <div className="relative bg-white w-[1190px] h-[350px] p-0 rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">
    {cars.map((car, index) => (
      <div
        key={index}
        className={`absolute top-0 left-0 w-full h-full flex items-center justify-center px-6 transition-all duration-900 ease-in-out
        ${current === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
      >
        <img src={car.photo} alt={car.title} width={500} className="rounded-xl" />

        <div className="flex flex-col w-[550px] ml-10">
          <h1 className="my-5 mx-7 font-trirong font-medium text-3xl">{car.title}</h1>
          <div className="bg-gray-300 w-full h-[1px] mx-7" />
          <div className="flex justify-between my-5 mx-7">
            <h2>Current Bid: {car.bid}</h2>
            <h2>Ends In: {car.ends}</h2>
          </div>
          <div className="bg-gray-300 w-full h-[1px] mx-7" />
          <p className="my-5 mx-7 text-justify text-gray-500">{car.desc}</p>
        </div>
      </div>
    ))}

  </div>


  <ul className="flex justify-center gap-8 m-8">
  {[...Array(10)].map((_, index) => (
    <li
      key={index}
      onClick={() => setCurrent(index)}
      className={current === index ? 'w-3.5 h-3.5 rounded-full border-1 bg-gray-950' : 'w-3.5 h-3.5 rounded-full border-1 border-gray-400 bg-transparent hover:border-gray-950'}
    ></li>
  ))}
</ul>

  </div>
  
</div>


    </>
    )
    
    

}

export default Caruosel






