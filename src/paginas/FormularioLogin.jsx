import React from 'react'

import { useNavigate } from "react-router-dom";


const FormularioLogin = () => 
{
  const navigate = useNavigate()
  return (
  
  <div className="w-full min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-5 text-center text-5xl font-extrabold">APPVET</h2>
        <div class="rounded-full mx-32 border-4 border-orange-800 h-32 w-32 flex items-center justify-center mb-4">
          <img src="https://cdn-icons-png.flaticon.com/512/616/616574.png" alt="dog" className='w-24 h-24 object-bottom'/>
        </div>
            <form>

              <div className="mb-4">

                <label className="block mb-1" htmlFor="email">
                  Email-Address
                </label>

                <input
                  id="email"
                  type="text"
                  name="email"
                  className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                />

              </div>

              <div className="mb-4">

                <label className="block mb-1" htmlFor="password">
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  name="password"
                  className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                />

              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    type="checkbox"
                    className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm leading-5 text-gray-900"
                  >
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <a href="#" className="text-sm">
                  {" "}
                  Forgot your password?{" "}
                </a>
              </div>

              <div className="mt-6">
                <button 
                onClick={() => navigate("/pacientes")}
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-sky-900 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-sky-700 active:bg-sky-700 focus:outline-none focus:border-sky-700 focus:ring focus:ring-sky-200 disabled:opacity-25 transition">
                  Sign In
                </button>
              </div>

              <div className="mt-6 text-center">
                <a className="underline">
                  Sign up for an account
                </a>
              </div>
              
            </form>
      </div>
  </div>

  )
}

export default FormularioLogin