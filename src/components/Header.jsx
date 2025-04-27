import React from 'react'
import { useCart } from '../hooks/useCart';

function Header({setIsCartOpen}) {
    const {getCartItemCount} = useCart();
  return (
    <header className='sticky top-0 z-10 bg-white shadow-md'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
            <div className='flex items-center'>
                <h1 className='text-2xl font-bold text-gray-800'>
                    Food <span className='text-orange-500'>Order</span>
                </h1>
            </div>
            <button
            onClick={()=>setIsCartOpen(true)}
            className='relative flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full transition-colors'
            >
                Cart
                {getCartItemCount() > 0 && (
                    <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                        {getCartItemCount()}
                    </span>
                )}
            </button>
        </div>

    </header>
)
}

export default Header