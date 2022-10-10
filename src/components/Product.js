import React from 'react';
import './style.css'

const Product = ({product}) => {
    const {id,name,logo,total} = product;
    return (
        <div className='product-card'>
            <div className='p-4'>
                <img className='bg-yellow-300 rounded w-full' src={logo} alt="" />
                <div className='flex justify-between justify-items-center items-center'>
                    <h3 className='font-bold text-2xl'>{name}</h3>
                    <h3 className='font-extrabold'>Total Quiz:{total}</h3>
                </div>
                <button className='w-full bg-orange-400 py-2 mt-3 rounded-lg text-2xl font-bold hover:bg-orange-500'>Start Quiz!</button>
            </div>
        </div>
    );
};

export default Product;
