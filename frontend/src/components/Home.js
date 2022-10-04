import React from "react";
import Navigation from "./Nav";

import FeaturesHome from "./FeaturesHome";

function Home() {
    return (
        <div>
            <Navigation />
            <div className="flex py-20 h-screen bg-gradient-to-b from-[#667eea] to-[#764ba2] justify-center text-center items-center">
                {/* <div style={{background: "linear-gradient(#e66465, #9198e5)"}} style={{background: "linear-gradient(#667eea, #764ba2)"}}></div> */}
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-2 text-white">
                        Shop With Your Friends!
                    </h2>
                    <h3 className="text-2xl mb-8 text-gray-200">
                        Share your shopping list with anyone you want on your next trip.
                    </h3>
                    <a className="" href="/sign-up">
                        <button className="flex mx-auto bg-white text-background-dark-color font-bold rounded-full py-4 px-10 shadow-lg uppercase tracking-wider hover:bg-background-dark-color hover:text-light-purple hover:shadow-lg border-bright-purple border-2 border-solid">
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
                        </button>
                    </a>    
                </div>
            </div>
            <FeaturesHome />
        </div>
  );
}

export default Home;
