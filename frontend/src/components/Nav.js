import { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentUser } from '../contexts/CurrentUser'
import '../App.css'

function Navigation() {

    const history = useHistory();

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <div style={{ height: '120px', background: 'black'}}>
            <li style={{ float: 'right' }}>
                <button>
                    <a href="#" onClick={() => history.push("/sign-up")}>
                        Sign Up
                    </a>
                </button>
                
            </li>
            <li style={{ float: 'right' }}>
                <button>
                    <a href="#" onClick={() => history.push("/login")}>
                        Login
                    </a>
                </button>
            </li>
            <img style={{ verticalAlign: 'middle', position: 'relative', top: '10px', display: 'inline-block', marginLeft: '10px' }} src="../images/logo/icons8-kawaii-dinosaur-100.png"></img>
            <h2 style={{ display: 'inline-block', fontSize: '30px', position: 'relative', top: '20px', color: 'white', fontWeight: 'bold' }}>DynaList</h2>
        </div>
    )

    if (currentUser) {
        loginActions = (
            <div style={{ height: '110px', background: '#FEF6FF' }}>
                <li style={{ float: 'right' }}>
                    Logged in as {currentUser.firstName} {currentUser.lastName}
                </li>
            </div>
        )
    }

    return (
        <div>
            <nav>
                <ul>
                    {loginActions}
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;