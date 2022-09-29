import { useContext, useState } from "react"
import { useHistory } from "react-router"
import { CurrentUser } from "../contexts/CurrentUser"

function LoginForm() {

    // const history = useHistory()

    // const { setCurrentUser } = useContext(CurrentUser)

    // const [credentials, setCredentials] = useState({
    //     email: '',
    //     password: ''
    // })

    // const [errorMessage, setErrorMessage] = useState(null)

    // async function handleSubmit(e) {
    //     e.preventDefault()
    //     //fetch refering to backend user auth file- adjust when file created.
    //     const response = await fetch(`${process.env.REACT_APP_SERVER_URL}authentication/`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(credentials)
    //     })

    //     const data = await response.json()

    //     if (response.status === 200) {
    //         setCurrentUser(data.user)
    //         history.push(`/`)
    //     } else {
    //         setErrorMessage(data.message)
    //     }

    // }

    return (
        <main>
            <h1>Login</h1>
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            <form onSubmit={handleSubmit}>
                <div className="">
                    <div className="">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            value={credentials.email}
                            onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                            className="form-control"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            required
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                            className="form-control"
                            id="password"
                            name="password"
                        />
                    </div>
                </div>
                <input className="" type="submit" value="Login" />
            </form>
        </main>
    )
}

export default LoginForm