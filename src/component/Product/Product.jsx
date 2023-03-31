import React, { useEffect, useState } from 'react';
import Takedata from '../Takedata/Takedata';

const Product = () => {
    const[cover,setCover]=useState([]);
    const [cart,setCart]=useState([]);
     useEffect(()=>{
          fetch('fake.json')
          .then(res=>res.json())
          .then(data=>setCover(data));
     },[])

     const handleBookmark =(product)=>{
        const newcart = [...cart,product];
        setCart(newcart);
   }
    return (
        <div className='container mx-auto flex justify-between gap-10 mb-10'>
            <div>
            {
                 cover.map(data=><Takedata 
                    key={data.id}
                    data={data}
                    handleBookmark={handleBookmark}>
                    
                    </Takedata>)
             }   
            </div>
            <div className=''>
                <div className='mb-10 bg-zinc-200 p-4 rounded-lg'>
                  Spent time on read : 0 min
                </div>
              
               <div className='bg-slate-300 p-4 rounded-lg'>
                   <h1>Bookmarked Blogs : {cart.length}</h1>
               </div>
            </div>
            
        </div>
    );
};

export default Product;
