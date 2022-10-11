import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';
import Quizs from '../components/Quizs';
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
            element:<Home></Home>,
        },
        {
            path:'/statistics',
            element:<Statistics></Statistics>,
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/quiz/:quizId',
            loader:async ({params}) =>{
                return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
            },
            element:<Quizs></Quizs>,
        },
    ],
}])

export default router;