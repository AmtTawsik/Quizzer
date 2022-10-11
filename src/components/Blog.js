import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center mt-6 text-2xl font-bold text-green-600'>Blogs</h1>
            <hr />
            <div>
                <div className='bg-lime-400 p-10 m-10 rounded-lg'>
                    <h1 className='text-2xl text-amber-600 font-bold'>Blog-1</h1>
                    <h5 className='text-xl text-cyan-600'>What is the purpose of react router?</h5>
                    <p className='font-mono font-bold text-fuchsia-800'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                        Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
                </div>

                <div className='bg-lime-400 p-10 m-10 rounded-lg'>
                    <h1 className='text-2xl text-amber-600 font-bold'>Blog-2</h1>
                    <h5 className='text-xl text-cyan-600'>How does context api works?</h5>
                    <p className='font-mono font-bold text-fuchsia-800'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br />React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                </div>

                <div className='bg-lime-400 p-10 m-10 rounded-lg'>
                    <h1 className='text-2xl text-amber-600 font-bold'>Blog-3</h1> 
                    <h5 className='text-xl text-cyan-600'>What is useref in react?</h5>
                    <p className='font-mono font-bold text-fuchsia-800'>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React, React will set its .current property to the corresponding DOM node whenever that node changes. <br />The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;