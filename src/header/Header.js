import React from 'react'
import hamb from '../assets/hamb-1.png'


export default function Header () {
  return (
   <header class="w-full h-[420px] bg-zinc-900">
     <div class="w-full h-full flex flex-col justify-center items-center">
      <img src={hamb} class="w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200"></img>

      <h1 class="text-4xl mt-4 mb-2 font-bold text-white">Burguer</h1>  

      <span class="text-white font-medium">
        Rua dev 10, São Paulo - SP
      </span>

      <div class="bg-green-600 px-4 py-1 rounded-lg mt-5">
        <span class="text-white font-medium">Seg á Dom - 18:00 as 23:00</span>
      </div>

      <div class="bg-red-600 px-4 py-1 rounded-lg mt-5">
        <span class="text-white font-medium">Fechado agora</span>
      </div>

     </div>           
   </header>
  )
}