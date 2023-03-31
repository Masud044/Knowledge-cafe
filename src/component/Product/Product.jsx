import React, { useEffect, useState } from 'react';
import Takedata from '../Takedata/Takedata';

const Product = () => {
    const[cover,setCover]=useState([]);
     useEffect(()=>{
          fetch('fake.json')
          .then(res=>res.json())
          .then(data=>setCover(data));
     },[])
    return (
        <div>
            
             {
                 cover.map(data=><Takedata 
                    key={data.id}
                    data={data}></Takedata>)
             }   
        </div>
    );
};

export default Product;
