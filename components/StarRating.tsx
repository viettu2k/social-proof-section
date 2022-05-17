import React from 'react'
import { Star } from './Star'

interface Prop {
  text: string
}

export const StarRating = ({ text }: Prop) => {
  return (
    <div className="group my-4 flex w-[260px] cursor-pointer flex-col items-center space-y-2 rounded-md bg-fuchsia-300 py-2 px-4 shadow-md transition  duration-300 ease-in hover:bg-fuchsia-500 hover:shadow-xl  md:w-[350px] md:flex-row md:justify-start md:space-y-0 md:space-x-4 md:py-3 md:last:ml-32 md:even:ml-16">
      <div className="flex space-x-1">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <p className="md:text-md flex items-center justify-start text-sm font-semibold text-fuchsia-700 group-hover:text-fuchsia-200 ">
        {text}
      </p>
    </div>
  )
}
