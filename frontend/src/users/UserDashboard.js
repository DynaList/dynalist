import React, { useEffect, useContext } from "react";

import UserTabs from "./UserTabs";
import UserNav from "./UserNav";
import UserBanner from "./UserBanner";
import serverRequest from "../api/backServer";
import { CurrentUser } from "../contexts/CurrentUser";
import { useHistory } from "react-router-dom";

export default function UserDashboard() {
  const { currentUser, initialState, setCurrentUser } = useContext(CurrentUser);

  const history = useHistory();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const requestUser = await serverRequest.get("api/sessions");

        setCurrentUser(requestUser.data.user);
      } catch (error) {
        if (error.message !== "Request failed with status code 403") {
          console.log(error);
        }

        // logOut()
      }
    };

    fetchSession();
  }, []);

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
