import React from "react";

function Home() {
    return (
        <div>
            
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