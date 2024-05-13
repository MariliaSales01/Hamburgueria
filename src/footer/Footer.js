import React from 'react'

export default function Footer (){
  return (
    <div>
        <div class='bg-black/60 w-full h-full fixed top-0 left-0 z-[99] hidden items-center justify-center'>
            <div class='bg-white p-5 rounded-md min-w=[90%] md:min-w-[600px]'>
                <h2 class='text-center font-bold text-2xl mb-2'>Meu carrinho</h2>

                <div class='flex justify-between mb-2 flex-col'></div>

                <p class='font-bold'>Total: <span>0.00</span></p>

                <p class='font-bold mt-4'>Endereço de entrega</p>

                <input type='text' placeholder='Digite seu endereço completo...'
                class='w-full border-2 p-1 rounded my-1'/>
                <p class='text-red-500 hidden'>Digite seu endereço completo!</p>

                <div class='flex items-center justify-between mt-5 w-full'>
                    <button>Fechar</button>
                    <button class='bg-green-500 text-white px-4 py-1 rounded'>Finalizar pedido</button>
                </div>

            </div>
        </div>

    <footer class='w-full bg-red-500 py-3 fixed bottom-0 z-40 flex items-center justify-center'>

        <button class='flex items-center gap-2 text-white font-bold'>
            (<span>0</span>)
                Veja meu carrinho
            <i class='fa fa-cart-plus text-lg text-white'></i>
        </button>
    </footer>
    </div>
  )
}
