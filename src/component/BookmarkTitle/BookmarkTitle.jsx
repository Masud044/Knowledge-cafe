import React from 'react';

const BookmarkTitle = (props) => {
   
    return (
        <div>
            <div className='mt-4 shadow-lg p-4 bg-white rounded-lg'>
               
                     <p className='font-medium'>{props.titleAdd.title}</p>

              
            </div>
        </div>
    );
};

export default BookmarkTitle;