import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Questions';

const Quizs = () => {
    const quizData = useLoaderData();
    const {name,questions} = quizData.data;
    // console.log(quizData.data)
    return (
        <div>
            <h1 className='text-center font-mono font-semibold text-4xl mt-6'>Quiz of {name}</h1>
            <div>
                {
                    questions.map(que => <Questions key={que.id} que={que}></Questions>)
                }
            </div>
        </div>
    );
};

export default Quizs;