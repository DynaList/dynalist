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

  // async function logOut() {
  //   console.log("logOut()");
  //   // await serverRequest.delete("api/sessions");

  //   localStorage.setItem("accessToken", null);
  //   localStorage.setItem("refreshToken", null);

  //   setCurrentUser({ ...initialState });
  //   console.log(currentUser);

  //   history.push("/");
  // }

  useEffect(() => {
    console.log("Before fetchSession");

    const fetchSession = async () => {
      console.log("Try");

      try {
        console.log("Before API call");

        const requestUser = await serverRequest.get("api/sessions");
        console.log(requestUser);

        setCurrentUser(requestUser.data.user);
      } catch (error) {
        if (error.message !== "Request failed with status code 403") {
          console.log(error);
        }

        // logOut()
      }

      console.log("Before 30");
    };

    fetchSession();
  }, []);

  console.log(currentUser);

  return (
    <div className="min-h-full">
      <UserNav />
      <UserBanner title="Dashboard"/>
      <main>
        <UserTabs currentUser={currentUser} />
      </main>
    </div>
  );
}
