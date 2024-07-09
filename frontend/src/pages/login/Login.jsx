import React from 'react'

const Login = () => {
  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-1'>
        <h1 className='text-3x1 text-white font-semibold text-center'>
            Login 
            <span className='text-blue-700'> ChatApp</span>
        </h1>

        <form>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-white'>Username</span>
                </label>
                <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'></input>
            </div>

            <div>
                <label className='label'>
                    <span className='text-base label-text text-white'>Password</span>
                </label>
                <input
                    type='password'
                    placeholder='Enter Password'
                    className='w-full input input-bordered h-10'
                />
            </div>

            <GenderCheckbox />

            <a href='#' className='text-sm hover:underline hover: text-blue-950 mt-2 inline-block'>
                {"Don't"} have an account?
            </a>

            <div>
                <button className='btn btn-block btn-sm mt-2 text-white'>Login</button>
            </div>
        </form>
    </div>
  </div>;
};

export default Login;