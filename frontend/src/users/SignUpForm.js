import { useContext } from "react";
import { useHistory } from "react-router-dom";

import serverRequest from "../api/backServer";
import { CurrentUser } from "../contexts/CurrentUser";

export default function SignUpForm() {
  const { currentUser, setCurrentUser } = useContext(CurrentUser);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    await serverRequest.post("api/users/new", {
      ...currentUser,
    });

    history.push(`/login`);
  }

  return (
    <main>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mt-0 overflow-hidden shadow rounded-md bg-white">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="mt-5 md:col-span-2 md:mt-0 px-4 py-5 sm:p-6 text-background-dark-color">
              <div className="pb-6">
                <img
                  className="mx-auto h-12 w-auto"
                  src="./images/logo/icons8-kawaii-dinosaur-100.png"
                  alt="DynaList"
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
                  Sign up for an account
                </h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className=" px-4 py-5 sm:p-6 text-background-dark-color">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <input
                          required
                          value={currentUser.firstName}
                          onChange={(e) =>
                            setCurrentUser({
                              ...currentUser,
                              firstName: e.target.value,
                            })
                          }
                          type="text"
                          name="firstName"
                          id="firstName"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </label>
                        <input
                          required
                          value={currentUser.lastName}
                          onChange={(e) =>
                            setCurrentUser({
                              ...currentUser,
                              lastName: e.target.value,
                            })
                          }
                          type="text"
                          name="lastName"
                          id="lastName"
                          autoComplete="family-name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email Address / Username
                        </label>
                        <input
                          required
                          value={currentUser.email}
                          onChange={(e) =>
                            setCurrentUser({
                              ...currentUser,
                              email: e.target.value,
                            })
                          }
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <input
                          required
                          value={currentUser.password}
                          onChange={(e) =>
                            setCurrentUser({
                              ...currentUser,
                              password: e.target.value,
                            })
                          }
                          type="password"
                          name="password"
                          id="password"
                          autoComplete="password"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Country
                        </label>
                        <select
                          required
                          value={currentUser.country}
                          onChange={(e) =>
                            setCurrentUser({
                              ...currentUser,
                              country: e.target.value,
                            })
                          }
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="street"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Street Address
                        </label>
                        <input
                          required
                          value={currentUser.street}
                          onChange={(e) =>
                            setCurrentUser({
                              ...currentUser,
                              street: e.target.value,
                            })
                          }
                          type="text"
                          name="street"
                          id="street"
                          autoComplete="street-address"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <input
                          required
                          value={currentUser.city}
                          onChange={(e) =>
                            setCurrentUser({
                              ...currentUser,
                              city: e.target.value,
                            })
                          }
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State / Province
                        </label>
                        <input
                          required
                          value={currentUser.state}
                          onChange={(e) =>
                            setCurrentUser({
                              ...currentUser,
                              state: e.target.value,
                            })
                          }
                          type="text"
                          name="state"
                          id="state"
                          autoComplete="address-level1"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="zip"
                          className="block text-sm font-medium text-gray-700"
                        >
                          ZIP / Postal code
                        </label>
                        <input
                          required
                          value={currentUser.zip}
                          onChange={(e) =>
                            setCurrentUser({
                              ...currentUser,
                              zip: e.target.value,
                            })
                          }
                          type="text"
                          name="zip"
                          id="zip"
                          autoComplete="postal-code"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="flex items-center w-full mx-auto justify-center rounded-md border border-transparent bg-logo-purple py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
