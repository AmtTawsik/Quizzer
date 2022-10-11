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

    return (
        <div className='quiz w-3/6 mx-auto my-6 p-6'>
            <h1 className='text-center font-mono text-xl text-green-600'>{index+1}. {question.replace('<p>','').replace('</p>','')}</h1>
            <div className='grid grid-cols-2 mt-5'>
                {
                    options.map(option=><label key={option} onChange={click} className='p-2 m-2 bg-yellow-400 rounded'><input type="radio" name={id} id="" value={option}/>{option}</label>)
                }
            </div>
        </div>
    );
};
export default Questions;