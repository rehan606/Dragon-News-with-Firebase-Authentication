import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    // Create user 
    const {createUser, setUser,  updateUserProfile} = useContext(AuthContext)

    // validation
    const [formError, setFormError] = useState({})

    // navigate for update user
    const navigate = useNavigate()

    const handleCreateUser = (e) => {
        e.preventDefault();

        // Get Form Data
        const form = new FormData(e.target);
        const name = form.get("name");
        if(name.length < 5){
            setFormError({...formError, name: "Must be more then 5 charecters or longer."});
            return ;
        }
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log({name, photo, email, password });

        createUser(email, password)
        .then(result => {
            const user = result.user
            setUser(user)
            updateUserProfile({displayName:name, photoUrl:photo }) // update profile
            .then(() => {
                navigate("/")
            })
            .catch(error => {
                console.log(error.message);
            })
        })
        .catch(error => {
            console.log('ERROR', error.message)
        })
    }

    


    return (
        <div>
            <div className='flex flex-col items-center justify-center '>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10 ">
                    <form onSubmit={handleCreateUser} className="card-body">
                        <h2 className='text-lg font-semibold text-gray-500  text-center'>Register Your Account </h2>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>

                        {
                            formError.name && (
                                <label className="label text-xs text-red-500">
                                    Name Must be 5 charecter or longer.
                                </label>
                            )
                        }

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Image URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
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