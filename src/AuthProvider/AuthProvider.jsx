import React, { createContext, useContext, useState } from 'react';
import { getAuth } from 'firebase/auth';
export const AuthContext = createContext();
const auth = getAuth;
const AuthProvider = ({ children }) => {
	const [user, setUser] = useContext(null);
	const [loading, setLoading] = useState(true);

	const authInfo = {
		user,
    loading
	};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
