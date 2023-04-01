import React from 'react';

const BookmarkTitle = (props) => {
    console.log(props.titleAdd.title);
    return (
        <div>
                 <div className='mt-4 shadow-lg p-4 bg-white rounded-lg'>
                    <p className='font-medium'>{props.titleAdd.title}</p>
                   </div>
        </div>
    );
};

export default BookmarkTitle;