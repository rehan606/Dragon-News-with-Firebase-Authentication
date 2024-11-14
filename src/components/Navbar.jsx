import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='flex justify-between py-4 items-center'>
            <div className="navbar-start">{user.name}</div>
            <div className="navbar-center">
                <ul className='flex'>
                    <li className='mr-4 text-gray-500 ' > <NavLink to="/">Home</NavLink> </li>
                    <li className='mr-4 text-gray-500 ' > <NavLink to="/about">About</NavLink> </li>
                    <li className='mr-4 text-gray-500 ' > <NavLink to="/career">Career</NavLink> </li>
                </ul>
            </div>
            <div className="navbar-end flex justify-end items-center gap-4">
                <img src={userIcon} alt="" />
                <Link to='/auth/login' className='px-8 py-2 text-white bg-[#D72050]'>Login</Link>
            </div>

        </div>
    );
};

export default Navbar;