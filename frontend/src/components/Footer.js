import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-background-dark-color">
        <div className="h-1/4 flex items-center justify-center h-screen container mx-auto px-6 pt-10 pb-6" >
          <div className="grid sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
            <div className="text-center md:text-left group w-full flex flex-col">
              <h5 className="uppercase mb-6 font-bold">Links</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-400 hover:text-logo-purple"
                  >
                    FAQ
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-400 hover:text-logo-purple"
                  >
                    Help
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-400 hover:text-logo-purple"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className=" text-center md:text-left group w-full flex flex-col">
              <h5 className="uppercase mb-6 font-bold">Legal</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-400 hover:text-logo-purple"
                  >
                    Terms
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-400 hover:text-logo-purple"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left group w-full flex flex-col">
              <h5 className="uppercase mb-6 font-bold">Social</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-400 hover:text-logo-purple"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-400 hover:text-logo-purple"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-400 hover:text-logo-purple"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className=" text-center md:text-left group w-full flex flex-col">
              <h5 className="uppercase mb-6 font-bold">Company</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-400 hover:text-logo-purple"
                  >
                    Official Blog
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-400 hover:text-logo-purple"
                  >
                    About Us
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-400 hover:text-logo-purple"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
