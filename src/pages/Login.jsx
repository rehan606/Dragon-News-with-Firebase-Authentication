import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    // Location pathname 
    const location = useLocation();
    const navigate = useNavigate();

    // SignIn User
    const {signInUser, setUser} = useContext(AuthContext);

    // Validation
    const [formError, setFormError] = useState({})


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password})
        
        signInUser(email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
            navigate(location?.state ? location.state : "/");
            alert('Login Successfully');
        })
        .catch(error => {
            setFormError({...formError, login: error.code})
        })

    }

    return (
        <div className='flex flex-col items-center justify-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10 ">
                <form onSubmit={handleLogin} className="card-body">
                    <h2 className='text-lg font-semibold text-gray-500  text-center'>Login Your Account </h2>
                    
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
                        
                        {/* Error Handling  */}
                        {
                            formError.login && (
                            <label className="label text-red-500 text-xs">
                                {/* {formError.login} */}
                                Enter valid User name and Password.
                            </label>)
                        }

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="w-full py-3 text-white bg-[#D72050]">Login</button>
                        <p className='text-center text-gray-400 mt-5'>Don't have an account <Link to='/auth/register'> <span className='text-[#D72050] font-semibold'>Register</span> </Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;