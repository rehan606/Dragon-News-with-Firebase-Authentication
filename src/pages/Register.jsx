import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center '>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10 ">
                    <form className="card-body">
                        <h2 className='text-lg font-semibold text-gray-500  text-center'>Register Your Account </h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Image URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control">
                            <label className=" flex  cursor-pointer">
                                <input type="checkbox" defaultChecked className="checkbox checkbox-primary mr-4" />
                                
                                <span className="label-text">Accept out Tarms and condition</span>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="w-full py-3 text-white bg-[#D72050]">Register</button>
                            <p className='text-center text-gray-400 mt-5'>Have an account <Link to='/auth/login'> <span className='text-[#D72050] font-semibold'>Login</span> </Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;