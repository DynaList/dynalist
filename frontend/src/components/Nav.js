import { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentUser } from '../contexts/CurrentUser'
import '../App.css'

function Navigation() {

    const history = useHistory();

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <div style={{alignContent: 'right'}}>
            <button className=" w-1/8 bg-white text-gray-800 font-bold rounded py-4 px-8 shadow-lg uppercase tracking-wider">
                <a href="#" onClick={() => history.push("/sign-up")}>
                    Sign Up
                </a>
            </button>
            <button className="w-1/8 bg-white text-gray-800 font-bold rounded py-4 px-8 shadow-lg uppercase tracking-wider">
                <a href="#" onClick={() => history.push("/login")}>
                    Login
                </a>
            </button>
        </div>
    )

    if (currentUser) {
        let loginActions = (
                <div>
                    <button className="bg-white text-gray-800 font-bold rounded py-4 px-8 shadow-lg uppercase tracking-wider">
                        Logged in as {currentUser.firstName} {currentUser.lastName}
                    </button>
                </div>
            
            
        )
    }

    return (
        <div>
            <nav>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <img src="./images/logo/icons8-kawaii-dinosaur-100.png" style={{width: "70px"}}></img>
                    <div className="">
                        <a className="font-bold text-2xl lg:text-4xl" href="/">
                        DynaList
                        </a> 
                    </div>
                    {loginActions}
                </div>
            </nav>
        </div>
    )
}

export default Navigation;