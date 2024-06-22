/** @format */

import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loader,setLoader] = useState(true)
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();
	// create user with email & pass
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// login by email & pass
	const loginByEmailPass = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	// login by google
	const loginByGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	};

	// login by github
	const loginByGithub = () => {
		return signInWithPopup(auth, githubProvider);
	};

	// Get the currently signed-in user
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoader(false)
			return () => unSubscribe();
		});
	}, []);
	// console.log(user);
    // logout user
    const logOut = () => {
    return signOut(auth)
    }

	const authInfo = {
		user,
		loader,
		createUser,
		loginByEmailPass,
		loginByGoogle,
		loginByGithub,
        logOut
	};
	return (
		<div>
			<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
		</div>
	);
};

export default AuthProvider;
