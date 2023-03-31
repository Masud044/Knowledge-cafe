import React from 'react';


const Header = () => {
    return (
        <div className='container mx-auto md:flex p-2 justify-between m-10'>
            <div>
                <h1 className='font-semibold text-4xl'>Knowledge Cafe</h1>
            </div>
            <div>
                 <img className='h-10' src="https://www.kindpng.com/picc/m/497-4973038_profile-picture-circle-png-transparent-png.png" alt="" /> 
            </div>
            
        </div>
    );
};

export default Header;