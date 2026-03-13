import { AuthContext } from '@/context/AuthContext';
import React from 'react';

export default function Authproviders({ children }) {
  const authInfo = {
    user: null,
    setUser: () => {},
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
