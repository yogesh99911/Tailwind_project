import React from 'react'
import { ArrowRight } from "lucide-react";
const RightCardContent = (props) => {
  return (
   
      
      <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between">
        <h2 className="bg-white text-xl rounded-full h-11 w-11 flex justify-center items-center">
      {props.id+1}
        </h2>
        <div>
          <p className="text-xl text-shadow-amber-200 leading-relaxed text-white mb-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            nesciunt quia quod vero perspiciatis ipsa?
          </p>
          <div className="flex justify-between">
            <button style={{backgroundColor:props.color}} className=" bg-blue-600   text-white font-medium  px-6 py-2 rounded-full">
            {props.tag}
            </button>
            <button className=" text-white p-3 rounded-full">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    
  )
}

export default RightCardContent