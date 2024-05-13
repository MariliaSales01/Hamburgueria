import React from 'react'
import burguer1 from '../assets/hamb-1.png'
import burguer2 from '../assets/hamb-2.png'
import burguer3 from '../assets/hamb-3.png'
import burguer4 from '../assets/hamb-4.png'
import burguer5 from '../assets/hamb-5.png'
import burguer6 from '../assets/hamb-6.png'

export default function Menu () {
  return (
    <div>
        <h2 class='text-2xl md:text-3xl font-bold text-center mt-9 mb-6'>Conheça nosso menu</h2>

        <div>
            <main class='grid grid-cols-1 gap-7 mx-auto max-w-7xl md:grid-cols-2 px-2 mb-16 md:gap-10 '>
                <div class='flex gap-2'>
                    <img src={burguer1} class='w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300'></img>

                    <div>
                        <p class='front-bold'>Hamburguer Smash</p>
                        <p class='text-sm'>Pão levinho de fermentação natural da Trigou, burguer 160g, queijo prato e maionee da casa.</p>

                        <div class='flex items-center gap-2 justify-between mt-3'>
                            <p class='font-bold text-lg'>R$ 18.90</p>
                            <button class='bg-gray-900 px-5 rounded'
                               data-name='Hamburguer Smash'
                               data-price='18.90'
                            >
                                <i class="fa fa-cart-plus text-lg text-white"></i>
                            </button>
                        </div>
                    </div>
                </div>  

                <div class='flex gap-2'>
                    <img src={burguer2} class='w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300'></img>

                    <div>
                        <p class='front-bold'>Hamburguer Duplo</p>
                        <p class='text-sm'>Pão levinho de fermentação natural da Trigou, burguer 160g, queijo prato e maionee da casa.</p>

                        <div class='flex items-center gap-2 justify-between mt-3'>
                            <p class='font-bold text-lg'>R$ 32
                            .90</p>
                            <button class='bg-gray-900 px-5 rounded'
                               data-name='Hamburguer Duplo'
                               data-price='32.90'
                            >
                                <i class="fa fa-cart-plus text-lg text-white"></i>
                            </button>
                        </div>
                    </div>
                </div>  

                <div class='flex gap-2'>
                    <img src={burguer3} class='w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300'></img>

                    <div>
                        <p class='front-bold'>Hamburguer Salad</p>
                        <p class='text-sm'>Pão levinho de fermentação natural da Trigou, burguer 160g, queijo prato e maionee da casa.</p>

                        <div class='flex items-center gap-2 justify-between mt-3'>
                            <p class='font-bold text-lg'>R$ 35.90</p>
                            <button class='bg-gray-900 px-5 rounded'
                               data-name='Hamburguer
                               Salad'
                               data-price='35.90'
                            >
                                <i class="fa fa-cart-plus text-lg text-white"></i>
                            </button>
                        </div>
                    </div>
                </div> 

                <div class='flex gap-2'>
                    <img src={burguer4} class='w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300'></img>

                    <div>
                        <p class='front-bold'>Hamburguer da casa</p>
                        <p class='text-sm'>Pão levinho de fermentação natural da Trigou, burguer 160g, queijo prato e maionee da casa.</p>

                        <div class='flex items-center gap-2 justify-between mt-3'>
                            <p class='font-bold text-lg'>R$ 29.99</p>
                            <button class='bg-gray-900 px-5 rounded'
                               data-name='Hamburguer da casa'
                               data-price='29.99'
                            >
                                <i class="fa fa-cart-plus text-lg text-white"></i>
                            </button>
                        </div>
                    </div>
                </div>  

                <div class='flex gap-2'>
                    <img src={burguer5} class='w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300'></img>

                    <div>
                        <p class='front-bold'>Hamburguer Smash</p>
                        <p class='text-sm'>Pão levinho de fermentação natural da Trigou, burguer 160g, queijo prato e maionee da casa.</p>

                        <div class='flex items-center gap-2 justify-between mt-3'>
                            <p class='font-bold text-lg'>R$ 18.90</p>
                            <button class='bg-gray-900 px-5 rounded'
                               data-name='HamburguerSmash'
                               data-price='18.90'
                            >
                                <i class="fa fa-cart-plus text-lg text-white"></i>
                            </button>
                        </div>
                    </div>
                </div>  

                <div class='flex gap-2'>
                    <img src={burguer6} class='w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300'></img>

                    <div>
                        <p class='front-bold'>Hamburguer de carne</p>
                        <p class='text-sm'>Pão levinho de fermentação natural da Trigou, burguer 160g, queijo prato e maionee da casa.</p>

                        <div class='flex items-center gap-2 justify-between mt-3'>
                            <p class='font-bold text-lg'>R$ 35.00</p>
                            <button class='bg-gray-900 px-5 rounded'
                               data-name='Hamburguerde carne'
                               data-price='35.00'
                            >
                                <i class="fa fa-cart-plus text-lg text-white"></i>
                            </button>
                        </div>
                    </div>
                </div>  
      
            </main>
        </div>
    </div>
  )
}
