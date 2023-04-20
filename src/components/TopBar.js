import React from 'react';
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai';
import {BsChatSquareDots} from 'react-icons/bs';

const TopBar=()=>{
    return(
        <div className="flex justify-between items-center bg-gray-200">
            <div className="flex font-bold py-4 px-4 hover:text-green-500  hover:font-bold ease-in duration-500">
                <BsChatSquareDots size={20} className="mr-2" />
                <h1 className="font-bold text-2xl">Travelers</h1>
            </div>
            <div className="flex justify-between items-center">
                <div className=" px-2 hidden sm:flex">
                    <AiOutlineClockCircle size={20} className="mr-2" />
                    <p>9AM - 5AM</p>
                </div>
                <div className="  px-2 hidden sm:flex">
                    <AiFillPhone size={20} className="mr-2" />
                    <p>09 10 20 30 40</p>
                </div>
                <button>Get Best Memory </button>
            </div>
        </div>
    );
}

export default TopBar;