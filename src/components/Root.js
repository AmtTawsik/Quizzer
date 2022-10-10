import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';

export const PeoductContext = createContext([]);

const Root = () => {
    const pro = useLoaderData();
    const products = pro.data;
    // console.log(products)
    return (
        <PeoductContext.Provider value={products}>
            <Header></Header>
            <Outlet></Outlet>
        </PeoductContext.Provider>
    );
};

export default Root;