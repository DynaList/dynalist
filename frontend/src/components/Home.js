import React, { useEffect } from "react";

import FeaturesHome from "./FeaturesHome";
import { getAllProducts } from "../api/walmartProducts";

function Home() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getAllProducts();
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  getAllProducts();

  return (
    <div>
      {/* <nav>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <img src="./images/logo/icons8-kawaii-dinosaur-50.png" style={{width: "40px"}}></img>
                    <div className="">
                        <a className="font-bold text-2xl lg:text-4xl" href="/">DynaList</a> 
                    </div>
                    
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-white border-gray-600 hover:text-white hover:border-teal-500 appearance-none focus:outline-none">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:block">
                    <ul className="inline-flex">
                        <li><a className="px-4 font-bold" href="/">Home</a></li>
                        <li><a className="px-4 hover:text-bright-purple" href="#">Login</a></li>
                    </ul>
                    </div>
                </div>
            </nav> */}
      <div className="flex py-20 h-screen bg-gradient-to-b from-[#667eea] to-[#764ba2] justify-center text-center items-center">
        {/* <div style={{background: "linear-gradient(#e66465, #9198e5)"}} style={{background: "linear-gradient(#667eea, #764ba2)"}}></div> */}
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Shop With Your Friends!
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            Share your shopping list with anyone you want on your next trip.
          </h3>
          <button className=" bg-white text-gray-800 font-bold rounded-full py-4 px-10 shadow-lg uppercase tracking-wider hover:bg-background-dark-color hover:text-light-purple hover:shadow-lg">
            <a className="flex mx-auto" href="/sign-up">
              Sign Up Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </a>
          </button>
        </div>
      </div>
      <FeaturesHome />
    </div>
  );
}

export default Home;
