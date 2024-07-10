import React from 'react';
import GenderCheckbox from './GenderCheckbox.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 
import useSignup from '../../hooks/useSignup.js';

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const {loading, signup} = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-1'>
            <h1 className='text-3x1 text-white font-semibold text-center'>
                Sign Up 
                <span className='text-blue-700'> ChatApp</span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>Full Name</span>
                    </label>
                    <input type='text' placeholder='John Doe' className='w-full input input-bordered h-10' 
                    value={inputs.fullName}
                    onChange={(e) => setInputs({...inputs, fullName: e.target.value})}/>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>Username</span>
                    </label>
                    <input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' 
                    value={inputs.username}
                    onChange={(e) => setInputs({...inputs, username: e.target.value})}/>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>Password</span>
                    </label>
                    <input type='text' placeholder='Enter Password' className='w-full input input-bordered h-10'
                    value={inputs.password}
                    onChange={(e) => setInputs({...inputs, password: e.target.value})} />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>Confirm Password</span>
                    </label>
                    <input type='text' placeholder='Confirm Password' className='w-full input input-bordered h-10' 
                    value={inputs.confirmPassword}
                    onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}/>
                </div>

                <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender} />

                <Link to={"/login"} className='text-sm hover:underline hover: text-blue-950 mt-2 inline-block'>
                    Already have an account?
                </Link>

                <div>
                    <button className='btn btn-block btn-sm mt-2 text-white'>Sign Up</button>
                </div>

            </form>
        </div>
    </div>
  );
};

export default SignUp;