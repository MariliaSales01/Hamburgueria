import React from 'react'
import bebida1 from '../assets/refri-1.png'
import bebida2 from '../assets/refri-2.png'

export default function Bebida () {
  return (
    <div class='mx-auto max-w-7xl px-2 my-2'>
        <h2 class='font-bold text-3xl'>Bebidas</h2>

        <div class='grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16'>
            
            <div class='flex gap-2 w-full'>
                    <img src={bebida1} class='w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300'></img>

                    <div class='w-full'>
                        <p class='front-bold'>Coca lata</p>

                        <div class='flex items-center gap-2 justify-between mt-3'>
                            <p class='font-bold text-lg'>R$ 6.00</p>
                            <button class='bg-gray-900 px-5 rounded'
                               data-name='Coca lata'
                               data-price='6.00'
                            >
                                <i class="fa fa-cart-plus text-lg text-white"></i>
                            </button>
                        </div>
                    </div>                   
                </div>  

                <div class='flex gap-2 w-full'>
                    <img src={bebida2} class='w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300'></img>

                    <div class='w-full'>
                        <p class='front-bold'>Guaraná lata</p>

                        <div class='flex items-center gap-2 justify-between mt-3'>
                            <p class='font-bold text-lg'>R$ 6.00</p>
                            <button class='bg-gray-900 px-5 rounded'
                               data-name='Guaraná lata'
                               data-price='6.00'
                            >
                                <i class="fa fa-cart-plus text-lg text-white"></i>
                            </button>
                        </div>
                    </div>                   
                </div>  
                 
        </div>

    </div>
  )
}
