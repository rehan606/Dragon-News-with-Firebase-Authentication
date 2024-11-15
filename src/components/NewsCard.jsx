import React, { useState } from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaStar, FaEye, } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ singleNews }) => {
    console.log(singleNews)
    const {
        _id,
        author,
        title,
        rating,
        total_view,
        thumbnail_url,
        published_date,
        details,
    } = singleNews;

    // Function to render stars based on the rating number
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < Math.floor(rating); i++) {
            stars.push(<FaStar key={i} className="text-yellow-400" />);
        }
        return stars;
    };

    // Seemore 
    // const [showFullDetails, setShowFullDetails] = useState(false);
    // // Toggle function to show/hide full details
    // const toggleDetails = () => setShowFullDetails(!showFullDetails);

    // // Display either first 10 words or full details based on state
    // const displayedDetails = showFullDetails ? details : details.split(' ').slice(0, 40).join(' ') + '...';


    return (
        <div>
            <div className=" w-full bg-white shadow-lg  border mb-6">
                <div className='flex items-center justify-between bg-gray-200 p-3'>
                    <div className="flex items-center space-x-4 ">
                        <img
                            src={author.img}
                            alt={author.name}
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <h2 className="font-semibold text-gray-800">{author.name}</h2>
                            <p className="text-sm text-gray-500">{author.published_date}</p>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <span className='cursor-pointer text-xl'><CiBookmark></CiBookmark></span>
                        <span className='cursor-pointer text-xl'><CiShare2></CiShare2></span>

                    </div>
                </div>

                <div className='p-4'>
                    <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>

                    <div className='h-72'>
                        <img
                            src={thumbnail_url}
                            alt={title}
                            className="mt-4 w-full h-full  object-cover rounded-lg"
                        />
                    </div>

                    <p className="mt-4 text-sm text-gray-700 line-clamp-3">
                        {details.slice(0, 200)}...{" "}
                        <Link to={`/news/${_id}`}  className="text-red-500 font-semibold ml-2">Read more</Link>
                    </p>
                    {/* <p className="mt-4 text-sm text-gray-700">
                        {displayedDetails}
                        {!showFullDetails && <button onClick={toggleDetails} className="text-red-500 font-semibold ml-2">See more</button>}
                        {showFullDetails && <button onClick={toggleDetails} className="text-red-500 font-semibold ml-2">See less</button>}
                    </p> */}

                    <div className="mt-4 flex items-center justify-between text-gray-600 border-t py-4">
                        <div className="flex items-center space-x-1 ">
                            <FaStar className="text-yellow-400" />
                            {renderStars(rating.number)}
                            <span>{rating.number}</span>
                            <span>{rating.badge}</span>
                        </div>

                        <div className="flex items-center space-x-1">
                            <FaEye />
                            <span>{total_view}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;