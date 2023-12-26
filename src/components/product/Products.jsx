import React from 'react'
import { CartState } from '../context/Context'
import SinglePorduct from './SinglePorduct';
import "./product.css"

const Products = () => {
    const {
        state: { products }, } = CartState();

    return (
        <div className='flex max-w-[1640px] m-auto justify-center items-center mt-8 py-6'>
            <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  my-10 gap-5 custom-card'>
                {
                    products.map((prod) => {
                        return <SinglePorduct prod={prod} key={prod.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Products