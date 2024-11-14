import React from 'react';
// React Icon
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='text-lg font-semibold text-white bg-[#D72050] p-2'>Login With </h2>

            <div className='space-y-2 mt-6'>
                <button className='w-full border text-gray-400  gap-2 hover:text-white hover:bg-[#D72050] text-center py-2 px-5 flex items-center justify-center'> <FaGoogle></FaGoogle> Login With Google</button>

                <button className='w-full border text-gray-400  gap-2 hover:text-white hover:bg-[#D72050]  text-center py-2 px-5 flex items-center justify-center'> <FaGithub></FaGithub> Login With GItHub</button>
            </div>
        </div> 
    );
};

export default SocialLogin;