import React, { useEffect, useState } from 'react';
import Takedata from '../Takedata/Takedata';
import Timeadd from '../Timeadd/Timeadd';

const Product = () => {
    const[cover,setCover]=useState([]);
    const [cart,setCart]=useState([]);
    const[times,setTimes]=useState(0);
     useEffect(()=>{
          fetch('fake.json')
          .then(res=>res.json())
          .then(data=>setCover(data));
     },[])

     const handleBookmark =(product)=>{
        const newcart = [...cart,product];
        setCart(newcart);
   }
   
   const Timehandle=(time)=>{
      let total = times + time;
   
       setTimes(total);
   
   }
     
    return (
        <div className='container mx-auto md:flex p-2 justify-between gap-10 mb-10'>
            <div>
            {
                 cover.map(data=><Takedata 
                    key={data.id}
                    data={data}
                    handleBookmark={handleBookmark}
                    Timehandle={Timehandle}
                    >
                    
                    </Takedata>)
             }   
            </div>
            <div className=''>
               <Timeadd cart={cart} time={times}></Timeadd>
             
            </div>
            
        </div>
    );
};

export default Product;
