import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';
import Root from '../components/Root';
import Statistics from '../components/Statistics';

const router = createBrowserRouter([{
    path:'/',
    loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/home',
            loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
            element:<Home></Home>,
        },
        {
            path:'/statistics',
            element:<Statistics></Statistics>,
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        }
    ],
}])

export default router;