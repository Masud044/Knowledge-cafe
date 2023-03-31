import React from 'react';

const Takedata = (props) => {
    console.log(props.data)
    const{id,img,url,title,name,date,time}=props.data;
    return (
        <div className='container mx-auto flex justify-between gap-10 mb-10'>
            <div className='border border-indigo-600 rounded-lg '>
             
              <img className='h-96' src={img} alt="" />
              <div className='flex justify-between mt-8'>
              <div className='flex justify-items-center items-center gap-4'>
               <img className='h-6 mt-3' src={url} alt="" />
              
               <p>{name}</p>
               
               
               </div>
               <p>{time}</p>
              </div>
              
               <p className='ml-8'>{date}</p>
               <h1 className='text-2xl font-semibold mt-10'>{title}</h1>
               <a className='text-sky-500 mt-20' href="#">Mark as read</a>
            </div>
            <div>
                 <h1>order samary</h1>
            </div>
            
        </div>
    );
};

export default Takedata;