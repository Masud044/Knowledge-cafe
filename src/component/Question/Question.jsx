import React from 'react';

const Question = () => {
    return (
        <div>
            <div className='shadow-lg text-center bg-slate-300 rounded-xl p-4 mb-4'>
                <h1 className='text-2xl font-bold mb-4'>Props vs state</h1>
                <p className='font-medium'>State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child. A prop can be passed on to the child in the state of a parent. They apply to the same value but can only be updated by the parent variable</p>
            </div>
            <div className='shadow-lg text-center bg-slate-300 rounded-xl p-4 mb-4'>
                <h1 className='text-2xl font-bold mb-4'>How does use state work?</h1>
                <p className='font-medium'>As stated previously, useState enables you to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component.

                    Whereas the state in a class is always an object, with Hooks, the state can be any type. Each piece of state holds a single value: an object, an array, a Boolean, or any other type you can imagine.</p>
            </div>
            <div className='shadow-lg text-center bg-slate-300 rounded-xl p-4 mb-4'>
                <h1 className='text-2xl font-bold mb-4'>Purpose of useEffect other than fetching data</h1>
                <p className='font-medium'>The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional. </p>
            </div>
            <div className='shadow-lg text-center bg-slate-300 rounded-xl p-4 mb-4'>
                <h1 className='text-2xl font-bold mb-4'>How Does React work?</h1>
                <p className='font-medium'>It is a component-based, open-source front-end library that is in charge of the application’s view layer. While it creates basic views for every state in the project, when the data changes, the framework also updates and renders the appropriate component promptly. With the declarative method, debugging becomes easy which in turn makes the code more predictable. </p>
            </div>
        </div>
    );
};

export default Question;