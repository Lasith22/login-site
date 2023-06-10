import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-[#31C48D] rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <form>
          <div>
            <label>User Name</label>
            <input
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              placeholder="User Name"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              placeholder="Your Password"
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              type="button"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Login
            </button>
          </div>

          <div className="flex justify-center items-center mt-6">
            <p>
              {' '}
              <Link to="/sign">Haven't Account Register </Link>{' '}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
