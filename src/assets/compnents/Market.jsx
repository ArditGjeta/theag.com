import React from "react";
import cars from "../DB/cars";
import { useRef } from "react";
import Font from "./Font.jsx";
import { Link } from "react-router-dom";


function Market() {

    const carRef = useRef(null);


    const handleClick = (direction) => {
        if(carRef.current){
            const amount = 300;
            carRef.current.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth',
        });
    }
};
    return (


        <div className="flex flex-col bg-white pt-16">
            <div  className="flex flex-col mt-25" >
                <h1 className="text-3xl font-bold mx-5 p-2">Auctions</h1>
                    <div ref={carRef} className="flex overflow-x-auto scroll-smooth gap-2 no-scrollbar py-2 px-10 ">
                    {cars.map((car, index) => (
                        <div className="min-w-96 h-88 flex flex-col items-center">
                            <img src={car.photo} alt="car" className="rounded-xl w-82 h-62" />
                            <h2 className="text-lg font-semibold mt-2">{car.title}</h2>
                            <h3 className="text-gray-500 text-sm">12.000 miles, 562-hp Twin-Turbo V8, Southern-Owned, Some Modifications</h3>
                        </div>
                    ))}
                    </div>
            </div>

            <div  className="flex flex-col" >
                <h1 className="text-3xl font-bold mx-5 p-2">RV Auctions</h1>
                    <div ref={carRef} className="flex overflow-x-auto scroll-smooth gap-2 no-scrollbar py-2 px-10 ">
                    {cars.map((car, index) => (
                        <div className="min-w-96 h-88 flex flex-col items-center">
                            <img src={car.photo} alt="car" className="rounded-xl w-82 h-62" />
                            <h2 className="text-lg font-semibold mt-2">{car.title}</h2>
                            <h3 className="text-gray-500 text-sm">12.000 miles, 562-hp Twin-Turbo V8, Southern-Owned, Some Modifications</h3>
                        </div>
                    ))}
                    </div>
            </div>

            <div  className="flex flex-col" >
                <h1 className="text-3xl font-bold mx-5 p-2">EVs Auctions</h1>
                    <div ref={carRef} className="flex items-start overflow-x-auto scroll-smooth gap-2 no-scrollbar py-2 px-10 ">
                    {cars.map((car, index) => (
                        <div className="relative min-w-82 h-[288px] flex flex-col items-start">
                            <img src={car.photo} alt="car" className="rounded-xl w-82 h-62" />
                           <Font className="absolute top-2 right-3 "/>
                           <p className="absolute bottom-20 left-2 text-white text-sm bg-black/30  px-2 py-1 rounded-xl"><span className="font-bold">Bid: </span>{car.bid}</p>
                            <h2 className="text-lg font-semibold mt-2">{car.title}</h2>
                            <h3 className="text-gray-500 text-sm">12.000 miles, 562-hp Twin-Turbo V8, Southern-Owned, Some Modifications</h3>
                        </div>
                    ))}
                    </div>
            </div>

            <div  className="flex flex-col" >
                <h1 className="text-3xl font-bold mx-5 p-2">RV Auctions</h1>
                    <Link to={'/car/${car.id}'} key={cars.id} ref={carRef} className="flex overflow-x-auto scroll-smooth gap-2 no-scrollbar py-2 px-10 ">
                    {cars.map((car, index) => (
                        <div className="relative w-[250px] h-[187px]"> 
                            <img src={car.photo} alt="car" className="rounded-xl w-full h-full object-cover"/>
                            <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-60 px-2 py-1 rounded">
                {car.title}
                         </p>
</div>

                    ))}
                    </Link>
            </div>


            
        </div>
    );
}

export default Market;