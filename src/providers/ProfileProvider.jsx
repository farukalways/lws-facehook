import { useReducer } from "react";
import { ProfileContext } from "../context";
import { initialState, profileReduecer } from "../reducers/profileReducer";

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReduecer, initialState);

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
