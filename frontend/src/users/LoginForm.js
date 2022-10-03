import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";

export default function LoginForm() {
  const history = useHistory();

  const { setCurrentUser } = useContext(CurrentUser);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    //fetch refering to backend user auth file- adjust when file created.
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}api/sessions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Authorization': `bearer ${accessToken}`
        },
        body: JSON.stringify(credentials),
      }
    );
    console.log(response);

    async function handleSubmit(e) {
        e.preventDefault()
        //fetch refering to backend user auth file- adjust when file created.
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}api/sessions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `bearer ${accessToken}`
            },
            body: JSON.stringify(credentials)
        })
        console.log(response)

        const data = await response.json()

        if (response.status === 200) {
            setCurrentUser(data.user)
            console.log(data.token)
            localStorage.setItem('token', data.token)
            history.push(`/dashboard`)
        } else {
            setErrorMessage(data.message)
        }

    if (response.status === 200) {
      setCurrentUser(data.user);
      history.push(`/dashboard`);
    } else {
      setErrorMessage(data.message);
    }
  }

  return (
    <main>
      {errorMessage !== null ? (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      ) : null}

      <div className="flex min-h-full h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-white p-4 rounded-md">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="./images/logo/icons8-kawaii-dinosaur-100.png"
              alt="DynaList"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-background-dark-grey">
              Login to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {/* <form className="mt-8 space-y-6" onSubmit={handleSubmit}> */}
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  required
                  value={credentials.email}
                  onChange={(e) =>
                    setCredentials({ ...credentials, email: e.target.value })
                  }
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  required
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-light-purple focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-dark-grey"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-logo-purple hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-logo-purple py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-light-purple group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {/* <LockClosedIcon className="h-5 w-5 text-light-purple group-hover:text-indigo-400" aria-hidden="true" /> */}
                </span>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
