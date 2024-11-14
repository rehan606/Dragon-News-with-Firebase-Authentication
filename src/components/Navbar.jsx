import React from 'react';
import { NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png';

const Navbar = () => {
    return (
        <div className='flex justify-between py-4 items-center'>
            <div className="navbar-start"></div>
            <div className="navbar-center">
                <ul className='flex'>
                    <li className='mr-4 text-gray-500 ' > <NavLink to="/">Home</NavLink> </li>
                    <li className='mr-4 text-gray-500 ' > <NavLink to="/about">About</NavLink> </li>
                    <li className='mr-4 text-gray-500 ' > <NavLink to="/career">Career</NavLink> </li>
                </ul>
            </div>
            <div className="navbar-end flex justify-end items-center gap-4">
                <img src={userIcon} alt="" />
                <span className='px-8 py-2 text-white bg-[#D72050]'>Login</span>
            </div>

        </div>
    );
};

export default Navbar;