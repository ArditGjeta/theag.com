import React from "react";
import cars from "../DB/cars";

function Market() {
    return (
        <div className="flex bg-white mx-90 my-10 rounded-2xl">
            
            
            <div className="flex-col">
            <h1 className="text-3xl font-trirong font-bold p-5">The AG Market Auctions</h1>
                {cars.map((car, index) => (
                    <div key={index} className="flex-col mx-0 px-0 bg-gray-100 p-1 rounded-xl">
                        
                        <img src={car.photo} alt={car.title} width={900} />
                        <div className="flex flex-col w-[850px] ">
                        <h1 className="my-5 mx-7 font-trirong font-medium text-3xl">{car.title}</h1>
                            <div className="bg-gray-300 w-full h-[1px] my-5 " />
                            <div className="flex justify-between my-5 mx-7">
                                <h2>Current Bid: {car.bid}</h2>
                                <h2>Ends In: {car.ends}</h2>
                            </div>
                            <div className="bg-gray-300 w-full h-[1px] " />
                            <p className="my-5 mx-7 text-justify text-gray-500">{car.desc}</p>
                        </div>
                        <div className="flex justify-end my-5">
                            <button className="bg-gray-950 text-white px-4 py-2 rounded-lg hover:bg-gray-800">More Details</button>
                        </div>
                    </div>
                    
                    
                ))}
            </div>
            <div className="flex-col bg-white px-5">
  <p className="text-2xl font-trirong font-bold p-5">Latest Auctions</p>
  <div className="grid grid-cols-2 gap-2">
    {cars.map((car, index) => (
      <img key={index} src={car.photo} alt="car" width={120} className="border" />
    ))}
  </div>
</div>
        </div>
    );
}

export default Market;