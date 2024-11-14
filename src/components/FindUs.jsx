import React from 'react';
// REact Icon
import { FaFacebook , FaTwitter,FaInstagram   } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className='text-lg font-semibold text-gray-500 mt-7'>Find Us On </h2>

            <div className=' mt-6 join join-vertical flex'>
                <button className='join-item w-full border text-gray-400  gap-2 hover:text-white hover:bg-[#D72050] text-center py-3 px-5 flex items-center justify-start'> <FaFacebook ></FaFacebook> FaceBook</button>

                <button className='join-item w-full border text-gray-400  gap-2 hover:text-white hover:bg-[#D72050] text-center py-3 px-5 flex items-center justify-start'> <FaTwitter></FaTwitter> Twitter</button>

                <button className='join-item w-full border text-gray-400  gap-2 hover:text-white hover:bg-[#D72050]  text-center py-3 px-5 flex items-center justify-start'> <FaInstagram ></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;