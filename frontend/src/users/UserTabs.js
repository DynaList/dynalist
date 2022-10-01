import { useState } from 'react'
import { Tab } from '@headlessui/react'
import UserPanel from './UserPanel'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function UserTabs() {
  let [categories] = useState({
    DynoPacks: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    DynaLists: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
  })

  return (
    <div className="w-full max-w-md px-2 pt-10 sm:px-0 mx-auto">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-background-dark-grey p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-logo-purple',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-bright-purple focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        {/* <UserPanel/> */}
      </Tab.Group>
    </div>
  )
}