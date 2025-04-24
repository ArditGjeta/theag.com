import React from "react";
import { useState } from "react";
import cars from "../DB/cars";


function Caruosel () {
    return(
    <>
    <div className="flex justify-center ">
    <div className="flex flex-col items-center bg-white w-[1100px] h-full p-0 rounded-2xl shadow-lg ">
    
    <div className="flex">
    <img src={cars[0].photo} alt={cars[0].title} width={500} />

    <div className=" flex flex-col w-[600px]">
    <h1 className="my-5 mx-7 font-trirong font-medium text-3xl">{cars[0].title}</h1>
    <div className="bg-gray-300 w-[550px] h-[0.5px] mx-7 "></div>
    <div className="flex justify-between my-5 mx-7">
    <h2>Current Bid: {cars[0].bid}</h2>
    <h2>Ends In: {cars[0].ends}</h2>
    </div>
    <div className="bg-gray-300 w-[550px] h-[0.5px] mx-7 "></div>
    <p className="my-5 mx-7 text-justify text-gray-500">{cars[0].desc}</p>
    
    </div>
    </div>
    </div>
    </div>
    </>
    )
    
    

}

export default Caruosel