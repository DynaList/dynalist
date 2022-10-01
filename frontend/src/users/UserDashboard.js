import React from "react";
import UserTabs from "./UserTabs";
import UserNav from "./UserNav";

export default function UserDashboard() {
  return (
      <div className="min-h-full">
        <UserNav/>
        <header className="bg-gradient-to-r from-[#667eea] to-[#764ba2] shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          </div>
        </header>
        <UserTabs/>
        <main>
          <div className="mx-auto max-w-7xl pb-6 sm:px-6 lg:px-8">
            <div className="px-4 pb-6 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-solid border-gray-200 bg-gray-200" />
            </div>
          </div>
        </main>
      </div>
  )
}