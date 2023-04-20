// import React from 'react';

// import dream1 from './img/dream-ten.jpg';
// import dream2 from './img/dream-three.jpg';
// import dream3 from './img/dream-six.jpg';
// import life from './img/dream-life.jpg';
// import lalibela from './img/ethio-lalibela.jpg';
// import ertale from './img/ethio-ertale.jpg';


// const images=[
//     {
//         id:1,
//         image:dream1,
//         },
//         {
//             id:2,
//             image:dream2,
//             },
//             {
//                 id:3,
//                 image:dream3,
//                 },
//                 {
//                     id:4,
//                     image:life,
//                     },
//                     {
//                         id:5,
//                         image:lalibela,
//                         },
//                         {
//                             id:6,
//                             image:ertale,
//                             },
// ];

// const Activity =()=>{
//     return(
//   <div className="grid gap-10 w-full  md:grid-cols-3 ">

//      {images.map(img =>
//      (
        
//      <div key={img.id} className="w-full border-4 mx-10">
//          <h1>Travelers </h1>
//          <img src={img.image} alt="dreamers"  className="md:h-full md:w-full" />
//      </div>
//      ))}

//  </div>
//     );
// }

// export default Activity;

import dream1 from './img/dream-ten.jpg';
 import dream2 from './img/dream-three.jpg';
import dream3 from './img/dream-six.jpg';
import life from './img/dream-life.jpg';
import lalibela from './img/ethio-lalibela.jpg';
import ertale from './img/ethio-ertale.jpg';

import React from 'react';

const Activity =()=>{
    return( 
        <div className="flex flex-col pt-[50%] bg-gray-900">
        <div className="md:flex md:h-full md:w-full justify-between xxs:mt-[200px] xxs:ml-[-40px]  xs:ml-0">
        <div className=" xxs:mt-48 mt-[400px] relative h-[50vh] w-[50vh] sm:w-[70vh] md:ml-4 ml-20  md:w-full m-4  border-4 border-green-500">
            <h1 className="hover:text-3xl hover:text-green-700 absolute text-2xl font-bold text-green-500 top-[50%] left-[40%]">Travelers</h1>
                <img src={dream1} alt="" className="h-[70vh]  w-[50vh] sm:w-[70vh] "/>
            </div>
            <div className="relative mt-48 h-[50vh] w-[50vh] sm:w-[70vh] md:ml-4 ml-20  md:w-full m-4  border-4 border-green-500">
            <h1 className="hover:text-3xl hover:text-green-700 absolute text-2xl font-bold text-green-500 top-[50%] left-[40%]">Travelers</h1>
                <img src={dream2} alt="" className="w-[50vh] sm:w-[70vh] h-[70vh]  "/>
            </div>
            <div className="relative mt-48 h-[50vh] w-[50vh] sm:w-[70vh] md:ml-4 ml-20  md:w-full m-4  border-4 border-green-500">
            <h1 className="hover:text-3xl hover:text-green-700 absolute text-2xl font-bold text-green-500 top-[50%] left-[40%]">Travelers</h1>
                <img src={dream3} alt="" className="w-[50vh] sm:w-[70vh] h-[70vh]  "/>
            </div>
        </div>
        <div className="md:flex md:h-full md:w-full justify-between xxs:ml-[-40px]  xs:ml-0">
        <div className="relative mt-48 h-[50vh] w-[50vh] sm:w-[70vh] md:ml-4 ml-20  md:w-full m-4  border-4 border-green-500">
            <h1 className="hover:text-3xl hover:text-green-700 absolute text-2xl font-bold text-green-500 top-[50%] left-[40%]">Travelers</h1>
                <img src={life} alt="" className="w-[50vh] sm:w-[70vh] h-[70vh]  "/>
            </div>
            <div className="relative mt-48 h-[50vh] w-[50vh] sm:w-[70vh] md:ml-4 ml-20  md:w-full m-4  border-4 border-green-500">
            <h1 className="hover:text-3xl hover:text-green-700 absolute text-2xl font-bold text-green-500 top-[50%] left-[40%]">Travelers</h1>
                <img src={lalibela} alt="" className="w-[50vh] sm:w-[70vh] h-[70vh]  "/>
            </div>
            <div className="relative mt-48 h-[50vh] w-[50vh] sm:w-[70vh] md:ml-4 ml-20  md:w-full m-4  border-4 border-green-500">
            <h1 className="hover:text-3xl hover:text-green-700 absolute text-2xl font-bold text-green-500 top-[50%] left-[40%]">Travelers</h1>
                <img src={ertale} alt="" className="w-[50vh] sm:w-[70vh] h-[70vh]  "/>
            </div>
        </div>
        </div>
    );
}

export default Activity;