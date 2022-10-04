import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { CurrentUser } from "../contexts/CurrentUser";

function Navigation() {
  const history = useHistory();

  const { currentUser } = useContext(CurrentUser);

  let loginActions = (
    <div>
      <a href="#" onClick={() => history.push("/login")}>
        <button className="w-1/8 border-solid border-2 border-light-purple bg-white text-background-dark-color font-bold rounded-full py-2 px-6 shadow-lg uppercase tracking-wider hover:bg-background-dark-color hover:text-light-purple hover:border-bright-purple hover:border-2 hover:border-solid hover:shadow-lg">
          Login
        </button>
      </a>
    </div>
  );

  // this needs to redirect to dashboard and show currentuser in the profile section of the userNav
  if (currentUser) {
    loginActions = (
      <div>
        <button className="bg-white text-background-dark-color font-bold rounded py-4 px-8 shadow-lg uppercase tracking-wider">
          Logged in as {currentUser.firstName} {currentUser.lastName}
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-background-dark-color">
        {({ open }) => (
          <div>
            {/* Large Screens menu view */}
            <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a href="/">
                      <img
                        className="h-8 w-8"
                        src="./images/logo/icons8-kawaii-dinosaur-50.png"
                        alt="DynaList"
                      />
                    </a>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <a className="font-bold text-2xl" href="/">
                        DynaList
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    {loginActions}
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white/[0.12] p-2 text-background-dark-color hover:bg-white/[0.12] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobile menu view */}
            <Disclosure.Panel className="md:hidden">
              <div className="border-t border-white/[0.12] pt-4 pb-3">
                <div className="mt-3 space-y-1 px-2">
                  <div className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/[0.12] hover:text-white">
                    {loginActions}
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
}

export default Navigation;
