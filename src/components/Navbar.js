/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import {
    FaTimes,
    FaBars, 
    FaFacebookF, 
    FaTwitter, 
    FaGooglePlusG,
     FaInstagram
    } from 'react-icons/fa';

    const Navbar =()=>{
        const [nav, setNav]=useState(false);

        const handleNav=()=>{
            setNav(!nav);
        }
        return(
            <div className="absolute w-full min-h-[50px] text-white bg-gray-700 flex justify-between items-center">
               <ul className="sm:flex items-center hidden px-4">
                <li className=" hover:text-green-500 hover:border-b-4 border-green-500 hover:border-r-4 hover:font-bold ease-in duration-500">
                    <a href="/">Home</a>
                </li>
                <li className=" hover:text-green-500 hover:border-b-4 border-green-500 hover:border-r-4 hover:font-bold ease-in duration-500">
                    <a href="#gallery">Gallery</a>
                </li>
                <li className=" hover:text-green-500 hover:border-b-4 border-green-500 hover:border-r-4 hover:font-bold ease-in duration-500">
                    <a href="#deals">Deals</a>
                </li>
                <li className=" hover:text-green-500 hover:border-b-4 border-green-500 hover:border-r-4 hover:font-bold ease-in duration-500">
                    <a href="#contact">Contact</a>
                </li>
               </ul>
               <div className="flex  justify-between">
                <FaFacebookF className="mx-4 font-bold text-white hover:font-bold hover:text-green-500 ease-in duration-500 "/>
                <FaTwitter className="mx-4 font-bold text-white hover:font-bold hover:text-green-500  ease-in duration-500 "/> 
                <FaGooglePlusG className="mx-4 font-bold text-white hover:font-bold hover:text-green-500 ease-in duration-500 "/>
                <FaInstagram className="mx-4 font-bold text-white hover:font-bold hover:text-green-500 ease-in duration-500 "/>
               </div>
               <div className="sm:hidden z-10" onClick={handleNav}>
                {nav ? <FaTimes size={20} className="mr-4 cursor-pointer"/> : <FaBars size={20} className="mr-4 cursor-pointer"/> }
               </div>
               <div
               onClick={handleNav} 
               className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 top-0 h-screen bg-black/90 px-4 py-7 flex flex-col w-full': 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
               <ul className="flex flex-col w-full h-full text-center pt-12">
                <li className="text-2xl py-8 hover:text-green-500 hover:border-b-4 border-green-500 w-48 ml-36 ease-in duration-500 hover:font-bold hover:border-r-8">
                    <a href="/">Home</a>
                </li>
                <li className="text-2xl py-8 hover:text-green-500 hover:border-b-4 border-green-500 w-48 ml-36 ease-in duration-500 hover:font-bold hover:border-r-8">
                    <a href="#gallery">Gallery</a>
                </li>
                <li className="text-2xl py-8 hover:text-green-500 hover:border-b-4 border-green-500 w-48 ml-36 ease-in duration-500 hover:font-bold hover:border-r-8">
                    <a href="#deals">Deals</a>
                </li>
                <li className="text-2xl py-8 hover:text-green-500 hover:border-b-4 border-green-500 w-48 ml-36 ease-in duration-500 hover:font-bold hover:border-r-8">
                    <a href="#contact">Contact</a>
                </li>
               </ul>
               </div>
            </div>
        )
    }

    export default Navbar;