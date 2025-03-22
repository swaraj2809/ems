import React, { createContext, useEffect } from 'react';
import { getLocalStorage, setLocalStorage, employees, admin } from '../utilities/localStorage';
export const AuthContext = createContext();
import { useState } from "react";

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage(employees, admin);
  }, []);
  
  useEffect(() => {
    const localStorageData = getLocalStorage();
    setUserData(localStorageData);
    
  }, [   ]);

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
