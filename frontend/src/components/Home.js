import React from "react";

function Home() {
    return (
        <div>
            <nav>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <img src="./images/logo/icons8-kawaii-dinosaur-50.png" style={{width: "40px"}}></img>
                    <div className="">
                        <a className="font-bold text-2xl lg:text-4xl" href="/">
                        DynaList
                        </a> 
                    </div>
                    {/* <a className="font-bold text-2xl lg:text-4xl" href="/">
                    DynaList
                    </a> */}
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
                        {/* <li><a className="px-4 font-bold" href="/">Home</a></li> */}
                        <li><a className="px-4 hover:text-bright-purple" href="#">Login</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
            <div className="py-20 bg-background-dark-color h-screen" style={{background: "linear-gradient(#667eea, #764ba2)"}}>
            {/* <div style={{background: "linear-gradient(#e66465, #9198e5)"}} style={{background: "linear-gradient(#667eea, #764ba2)"}}></div> */}
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-2 text-white">
                    Shopping With Your Friends!
                    </h2>
                    <h3 className="text-2xl mb-8 text-gray-200">
                    Share your  to do list with anyone you want on your next shopping trip.
                    </h3>
        
                    <button className="bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                    Sign Up Now
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default Home;