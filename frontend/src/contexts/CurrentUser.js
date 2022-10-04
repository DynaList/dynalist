import { createContext, useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  country: "",
  street: "",
  city: "",
  state: "",
  zip: "",
};

export const CurrentUser = createContext();

export default function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(initialState);

  return (
    <CurrentUser.Provider value={{ initialState, currentUser, setCurrentUser }}>
      {children}
    </CurrentUser.Provider>
  );
}
