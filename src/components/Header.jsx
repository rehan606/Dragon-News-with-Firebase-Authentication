import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-4'>
            <div className="logo">
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <h2 className=' text-gray-400 '>Jurnalism with fair and favour</h2>

            <p className='font-semibold text-gray-500'> {moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;