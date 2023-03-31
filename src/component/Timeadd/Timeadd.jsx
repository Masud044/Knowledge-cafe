import React from 'react';

const Timeadd = (props) => {
    
    const{cart, time,title}=props;
   
    return (
        <div>
              <div className='mb-10 bg-zinc-200 p-4 rounded-lg'>
                    <h1 className='text-2xl font-normal text-cyan-500'>Spent time on read :{time} min</h1>
                  
                </div>
              
               <div className='bg-slate-300 p-4 rounded-lg'>
                   <h1 className='text-2xl font-medium'>Bookmarked Blogs : {cart.length}</h1>
               </div>
               <div>
                <h1>{title}</h1>
               </div>
        </div>
    );
};

export default Timeadd;