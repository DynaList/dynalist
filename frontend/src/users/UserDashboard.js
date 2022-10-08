import React, { useEffect, useContext } from "react";

import UserTabs from "./UserTabs";
import UserNav from "./UserNav";
import UserBanner from "./UserBanner";
import serverRequest from "../api/backServer";
import { CurrentUser } from "../contexts/CurrentUser";

export default function UserDashboard() {
  const { currentUser, setCurrentUser } = useContext(CurrentUser);

  // useEffect(() => {
  //   const fetchSession = async () => {
  //     try {
  //       const {
  //         data: { user },
  //       } = await serverRequest.get("api/sessions");

  //       console.log(user);

  //       setCurrentUser({ ...currentUser, ...user });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchSession();
  // }, []);

  useEffect(() => {
    console.log("Before fetchSession");

    const fetchSession = async () => {
      console.log("Try");

      try {
        console.log("Before API call");

        const requestUser = await serverRequest.get("api/sessions");
        console.log(requestUser);

        setCurrentUser({ ...currentUser, ...requestUser.data.user });
      } catch (error) {
        if (error.message === "Request failed with status code 403") return;

        console.log(error);
      }

      console.log("Before 30");
    };

    fetchSession();
  }, []);

  console.log(currentUser);

  return (
    <div className="min-h-full">
      <UserNav />
      <UserBanner />
      <main>
        <UserTabs currentUser={currentUser} />
      </main>
    </div>
  );
}
