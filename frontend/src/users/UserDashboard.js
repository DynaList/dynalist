import React from "react";
import UserTabs from "./UserTabs";
import UserNav from "./UserNav";
import UserBanner from "./UserBanner";
import MyModal from "./PopOutModal";

export default function UserDashboard() {
  return (
      <div className="min-h-full">
        <UserNav/>
        <UserBanner/>
        <main>
          <UserTabs/>
          {/* <MyModal/> */}
        </main>
      </div>
  )
}