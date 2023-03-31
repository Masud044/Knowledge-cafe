import React from 'react';

const Timeadd = (props) => {
    
    const{cart, time}=props;
    let title1 = [];
    props.cart.map(p=>{
        title1.push(p.title);
    })
    console.log(title1)
   
    return (
        <div>
              <div className='mb-10 bg-zinc-200 p-4 rounded-lg'>
                    <h1 className='text-2xl font-normal text-cyan-500'>Spent time on read :{time} min</h1>
                  
                </div>
              
               <div className='bg-slate-300 p-4 rounded-lg'>
                   <h1 className='text-2xl font-medium'>Bookmarked Blogs : {cart.length}</h1>
                   <div className='mt-4 shadow-lg p-4 bg-white rounded-lg'>
                    <p className='font-medium'>{title1}</p>
                   </div>
                   
               </div>
              
                 
               
        </div>
    );
};

export default Timeadd;