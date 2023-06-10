import React, { useState } from 'react';

const SignIn = () => {
  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto   bg-gray-300 rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <form>
          <div className=" flex sm:flex-row  flex-col  justify-between   sm:gap-7 gap-0 ">
            <label className=" text-lg mb-2">User&nbsp;Name</label>

            <span className="   hidden sm:block   ">:-</span>
            <input
              className={`w-full   p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            />
          </div>

          <div className=" flex sm:flex-row  flex-col  justify-between   sm:gap-7 gap-0 ">
            <label className=" text-lg mb-2">Password</label>

            <span className=" ml-0  hidden sm:block sm:ml-3 ">:-</span>
            <input
              className={`w-full   p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            />
          </div>

          <div className=" flex sm:flex-row  flex-col  justify-between   sm:gap-7 gap-0 ">
            <label className=" text-lg mb-2 ">Driver&nbsp;ID</label>

            <span className=" ml-0 hidden sm:block  sm:ml-5 ">:-</span>
            <input
              className={`w-full   p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            />
          </div>

          <div className=" flex sm:flex-row  flex-col  justify-between   sm:gap-7 gap-0 ">
            <label className=" text-lg mb-2 ">Bus&nbsp;ID</label>

            <span className=" ml-0 hidden sm:block sm:ml-9  ">:-</span>
            <input
              className={`w-full   p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            />
          </div>

          <div className=" flex sm:flex-row  flex-col  justify-between   sm:gap-7 gap-0 ">
            <label className=" text-lg mb-2"> Telephone</label>

            <span className=" ml-0  hidden sm:block  sm:ml-1 ">:-</span>
            <input
              className={`w-full   p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            />
          </div>
        </form>
        <div className="flex justify-center items-center mt-6">
          <button
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
