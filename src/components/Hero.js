import React from 'react';
import image1 from './img/ethio-girl.jpg';

const Hero =()=>{
    return(
        <div className="w-full h-[90vh]">
            <div className="w-full h-[90vh]">
                <img src={image1} alt="dream" className="w-full"/>
            </div>
            <div className="max-w-[1140] m-auto">
            <div className="absolute text-white top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col p-4">
                <h1 className="font-bold text-2xl pt-[232px] mt-60 ">Find your special travel story</h1>
                <h2 className="font-bold text-2xl">With Travelers</h2>
                <p className="pb-[20%] mb-[20%]">Travelers are adventurous and curious individuals who seek new experiences, perspectives, and cultures. They possess an open mind and an eagerness to learn, grow, and explore the world beyond their comfort zone. Travelers broaden their horizons by immersing themselves in unfamiliar surroundings, trying new food, learning a new language, making new friends, and gaining a deeper understanding of the diversity of humanity. Travelers often return from their journeys with a renewed sense of appreciation for the world and a greater awareness of their place in it.</p>
            </div>
            </div>
        </div>
    );
}

export default Hero;