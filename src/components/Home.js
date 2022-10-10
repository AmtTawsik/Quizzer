import React, { useContext } from 'react';
import Product from './Product';
import { PeoductContext } from './Root';
import './style.css'

const Home = () => {
    const products = useContext(PeoductContext);
    console.log(products)
    return (
        <div>
            <div className='home-container'>
                <h1 className='header-text lg:text-7xl md:text-4xl text- text-center md:font-bold text-fuchsia-100 overflow-hidden'>Welcome to the world’s largest quiz community.Take these quizzes at QUIZZER to test your knowledge on a variety of fun.</h1>
            </div>
            <div className='product-container w-10/12 container mx-auto gap-10 md:grid md:mt-5'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;