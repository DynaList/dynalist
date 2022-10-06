import { useState, useContext } from "react";
import { Tab } from "@headlessui/react";

import NewList from "./NewList";
import { CurrentUser } from "../contexts/CurrentUser";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UserTabs() {
  const { currentUser } = useContext(CurrentUser);

  let dynopacks = [];
  if (currentUser.firstName === "") {
    // tell the user to log in or just send them to the home page
  } else {
    dynopacks = currentUser.user.groups.map((group) => {
      return {
        id: group._id,
        title: group.name,
        date: "5h ago",
        listCount: group.lists.length,
        userCount: group.members.length,
      };
    });
  }

  let [categories] = useState({
    DynoPacks: dynopacks,
    DynaLists: [
      {
        id: 1,
        title: "Walmart Shopping List",
        date: "Jan 7",
        listCount: 29,
        userCount: 16,
      },
      {
        id: 2,
        title: "Grocery Shopping List",
        date: "Mar 19",
        listCount: 24,
        userCount: 12,
      },
    ],
  });

  return (
    <div>
      <Tab.Group>
        <Tab.List className="w-full max-w-md px-2 mt-10 sm:px-0 mx-auto flex space-x-1 rounded-xl bg-background-dark-grey p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-logo-purple",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-bright-purple focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <div className="mx-auto max-w-7xl pb-6 sm:px-6 lg:px-8">
          <div className="px-4 pb-6 sm:px-0">
            <Tab.Panels className="mt-2 h-96 rounded-lg border-4 border-solid border-gray-100 bg-gray-100">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl p-3"
                    // 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <ul className="sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-sm leading-6">
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 hover:bg-bright-purple text-background-dark-color border-solid border-2 border-bright-purple"
                      >
                        <h3 className="text-sm font-medium leading-5 text-background-dark-color">
                          {post.title}
                        </h3>

                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 hover:text-background-dark-color">
                          <li>{post.date}</li>
                          <li>&middot;</li>
                          <li>{post.listCount} DynaLists</li>
                          <li>&middot;</li>
                          <li>{post.userCount} Dynos</li>
                        </ul>

                        <div className="py-2 flex -space-x-1 overflow-hidden">
                          <img
                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <img
                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <img
                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                            alt=""
                          />
                          <img
                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>

                        <a
                          href="#"
                          className={classNames(
                            "absolute inset-0 rounded-md",
                            "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                          )}
                        />
                      </li>
                    ))}
                    <li className="flex">
                      <a
                        href="/newgroup"
                        className="hover:border-bright-purple hover:border-solid hover:text-bright-purple group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-400 font-medium py-3"
                      >
                        <svg
                          className="group-hover:text-bright-purple mb-1 text-slate-400"
                          width="20"
                          height="20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                        </svg>
                        New DynoPack
                      </a>
                    </li>
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </div>
  );
}
