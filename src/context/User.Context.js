import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isUserVerified, setIsUserVerified] = useState(null);

  const checkUser = useCallback(async () => {
    try {
      const response = await axios.get("/api/user/check");
      if (response.status === 201) {
        setIsUserVerified(true);
      } else {
        setIsUserVerified(false);
      }
    } catch (error) {
      setIsUserVerified(false);
    }
  }, []);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <UserContext.Provider value={{ isUserVerified }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => UserContext;
