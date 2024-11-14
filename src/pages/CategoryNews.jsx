import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';



const CategoryNews = () => {

    const data = useLoaderData()
    console.log(data)

    return (
        <div>
            <h2 className='text-lg font-semibold text-white bg-[#D72050] p-2'>{data.length}  Dragon News Home</h2>
            <div className='mt-6'>
                {
                    data?.length ? (
                        data.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                    )
                    :
                    (
                        <p className='text-2xl text-gray-400 font-bold text-center mt-36'>No data found</p>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryNews;