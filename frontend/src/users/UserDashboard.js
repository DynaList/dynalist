import React from "react";
import UserTabs from "./UserTabs";
import UserNav from "./UserNav";
import UserBanner from "./UserBanner";

export default function UserDashboard() {
  return (
      <div className="min-h-full">
        <UserNav/>
        <UserBanner/>
        <UserTabs/>
        <main>
          <div className="mx-auto max-w-7xl pb-6 sm:px-6 lg:px-8">
            <div className="px-4 pb-6 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-solid border-gray-200 bg-gray-200" />
              {/* Add in Group and List Components Here */}
            </div>
          </div>
        </main>
      </div>
  )
}