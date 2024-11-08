import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import User from "../interfaces/User";

interface UserContextType {
  loggedInUser: User;
  setLoggedInUser: Dispatch<SetStateAction<User>>;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);
export const UserProvider: React.FC<UserProviderProps> = ({children}) => {
  const [loggedInUser, setLoggedInUser] = useState<User>({} as User);

  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;