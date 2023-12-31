import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Takedata = (props) => {
  

    const { id, img, url, title, name, date, time } = props.data;
    const handleBookmark=props.handleBookmark;
    const Timehandle = props.Timehandle;
    
    return (
        <div className=''>
            <div className='border border-indigo-600 rounded-lg mb-10 '>

                <img className='h-96' src={img} alt="" />
                <div className='flex justify-between mt-8'>
                    <div className='flex justify-items-center md:items-center gap-4'>
                        <img className='h-6 mt-3' src={url} alt="" />

                        <p className='font-medium'>{name}</p>


                    </div>
                    <p className='pr-2'>{time} min read  <span onClick={()=>handleBookmark(props.data)} className='text-orange-400'> <FontAwesomeIcon icon={faBookmark }/> </span>
</p>
                </div>

                <p className='ml-8'>{date}</p>
                <h1 className='text-2xl font-semibold mt-10'>{title}</h1>
                <button onClick={()=>Timehandle(time)} className='text-sky-500 mt-20 border' >Mark as read</button>
            </div>


        </div>
    );
};

export default Takedata;