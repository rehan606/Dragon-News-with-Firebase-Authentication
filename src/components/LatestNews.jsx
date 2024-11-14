import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-4 items-center bg-gray-200 pr-4'>
            <p className='bg-[#D72050] text-white px-4 py-2'>Latest:</p>
            <Marquee pauseOnHover={true} >
                <Link to='/news' className='mr-5'>Lorem ipsum dolor sit.</Link>
                <Link to='/news' className='mr-5'>Lorem ipsum dolor sit.</Link>
                <Link to='/news' className='mr-5'>Lorem ipsum dolor sit.</Link>
                <Link to='/news' className='mr-5'>Lorem ipsum dolor sit.</Link>
                <Link to='/news' className='mr-5'>Lorem ipsum dolor sit.</Link>
                <Link to='/news' className='mr-5'>Lorem ipsum dolor sit.</Link>
                <Link to='/news' className='mr-5'>Lorem ipsum dolor sit.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;