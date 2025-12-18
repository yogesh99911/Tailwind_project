import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props)
  return (
    <div id='right' className='  rounded-xl overflow-x-auto gap-10 flex flex-nowrap h-full w-2/3'> 
  {props.users.map(function(elem,idx){
    return <RightCard key = {idx} id ={idx} img = {elem.img} tag = {elem.tag} color = {elem.color} />
  })}
    </div>
  )
}

export default RightContent