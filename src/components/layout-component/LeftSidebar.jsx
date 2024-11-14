import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const LeftSidebar = () => {
    // Category Api
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategory(data.data.news_category))
    }, [])

    return (
        <div>
            <h2 className='text-lg font-semibold text-white bg-[#D72050] p-2'>All Category {category.length} </h2>

            <div className='flex flex-col items-center gap-2 mt-6'>
                {
                    category.map(category => <NavLink to={`/category/${category.category_id}`} className='w-full border text-gray-400  font-semibold hover:text-gray-50 hover:bg-gray-500 text-center py-3 px-5' key={category.category_id}> {category.category_name} </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSidebar;