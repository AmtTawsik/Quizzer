import React from 'react';
import { toast } from 'react-toastify';
import './style.css'

const Questions = ({que,index}) => {
    const {question,options,id,correctAnswer} = que;
    // console.log(que)
    const click =(event)=>{
        const clickedValue =event.target.value;
        if(clickedValue === correctAnswer){
            toast.success('Right Answer!!',{autoClose:1000})
        }
        else{
            toast.warning('Wrong Answer!!',{autoClose:1000})
        }
    }

    const eyeClick = () =>{
        toast.info(`Correct Answer is:${correctAnswer}`,{autoClose:1500})
    }

    return (
        <div className='quiz w-11/12 md:w-3/6 mx-auto my-6 p-6'>
            <div onClick={eyeClick} className='flex flex-row-reverse'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
            <h1 className='text-center font-mono text-xl text-green-600'>{index+1}. {question.replace('<p>','').replace('</p>','')}</h1>
            <div className='grid md:grid-cols-2 mt-5'>
                {
                    options.map(option=><label key={option} onChange={click} className='p-2 m-2 bg-yellow-400 rounded'><input type="radio" name={id} id="" value={option}/>{option}</label>)
                }
            </div>
        </div>
    );
};
export default Questions;