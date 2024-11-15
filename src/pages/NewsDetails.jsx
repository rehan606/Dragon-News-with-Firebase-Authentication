import React from 'react';
import Header from '../components/Header';
import RightSidebar from '../components/layout-component/RightSidebar';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';

const NewsDetails = () => {
    const data = useLoaderData()
    const news = data.data[0]
    const {title, details, thumbnail_url , category_id}= news
    console.log(news)
    return (
        <div className='font-poppins'>
            <header className='pt-5'>
                <Header></Header>
            </header>

            <main className='w-11/12 mx-auto grid grid-cols-12 gap-6 mt-10'>
                <section className='col-span-9'>

                    <h2 className='text-lg font-semibold text-white bg-[#D72050] p-2 mb-6 '> Dragon News</h2>

                    <div className="card card-compact bg-base-100 w-full shadow-xl p-5 border rounded-none mb-6">
                        <figure>
                            <img
                                src={thumbnail_url}
                                alt="News" className='w-full h-96 '  />
                        </figure>
                        <div className="mt-10 space-y-5">
                            <h2 className="card-title text-gray-600">{title}</h2>
                            <p className='text-gray-500'>{details}</p>
                            <Link to={`/category/${category_id}`} className="card-actions justify-start bg-[#D72050] py-3 px-10 mt-6 w-80 items-center">
                                <span className='text-white'><FaArrowLeftLong></FaArrowLeftLong></span>
                                <span className="text-white ">  All News In This Category</span>
                            </Link>
                        </div>
                    </div>
                </section>
                <aside className='col-span-3'>
                    <RightSidebar></RightSidebar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;