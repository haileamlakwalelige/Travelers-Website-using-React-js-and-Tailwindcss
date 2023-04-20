import React from 'react';


const Booking =()=>{
    return(
        <div id="deals" className="max-w-[1140px] m-auto w-full p-4 py-16 pt-48">
        <h2 className="text-center text-gray-700">Fill Free To Join </h2>
        <p className="text-center text-gray-700 py-2">We're Like Friend to You!</p>
        <div>
            <form>
                <div className="grid grid-cols-2">
                    <label className="border m-2 p-2 rounded shadow-lg opacity-80">Destination</label>
                    <select className="border m-2 p-2 rounded shadow-lg opacity-50" >
                        <option>Ethiopia</option>
                        <option>USA</option>
                        <option>England</option>
                        <option>France</option>
                    </select>
                    <label className="border m-2 p-2 rounded shadow-lg  opacity-80" >Check In</label>
                    <input className="border m-2 p-2 rounded shadow-lg opacity-50" type="date" />
                    <label className="border m-2 p-2 rounded shadow-lg opacity-80" >Check out</label>
                    <input className="border m-2 p-2 rounded shadow-lg opacity-50" type="date" />                  
                    <button className="col-span-2 p-2 m-2">Submit</button>
                    </div>
                </form>
        </div>
        </div>
    )
}

export default Booking;