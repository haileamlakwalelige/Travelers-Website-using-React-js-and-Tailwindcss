import React from 'react';

import gal1 from './img/dream-11.jpg';
import gal2 from './img/dream-12.jpg';
import gal3 from './img/dream-13.jpg';
import gal4 from './img/dream-14.jpg';
import gal5 from './img/dream-15.jpg';

const Gallery=()=>{
    return(
        <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16 bg-yellow-100 mt-10 mb-10 lg:h-[140vh] lg:w-[140vh]">
            <h2 className="text-center text-gray-700 p-4">Gallery</h2>
            <div className="grid sm:grid-cols-5 gap-4">
            <div className="sm:col-span-3 col-span-2 row-span-2">
                <img src={gal1} alt="" className="w-full h-[400px] object-cover sm:h-full"/>
            </div>
            <div>
                <img src={gal2} alt="" className="w-full h-full object-cover"/>
            </div>
            <div >
                <img src={gal3} alt="" className="w-full h-full object-cover"/>
            </div>
            <div >
                <img src={gal4} alt="" className="w-full h-[300px] object-cover sm:h-full"/>
            </div>
            <div >
                <img src={gal5} alt="" className="w-full h-[300px] object-cover sm:h-full"/>
            </div>
            </div>
        </div>
    );
}

export default Gallery;