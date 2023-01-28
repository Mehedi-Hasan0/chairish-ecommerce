import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useQuery } from '@tanstack/react-query';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])

    // added products cart data getting started

    const [cartProducts, setCartProducts] = useState([]);
    const { data: viewCart = [], isLoading, refetch } = useQuery({
        queryKey: ['viewCart'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/viewCart');
            const data = await res.json();
            setCartProducts(data);
            return data;
        }
    })

    // added products cart data getting end

    const authInfo = {
        // authentication data
        createUser,
        signIn,
        updateUser,
        logout,
        user,
        googleSignIn,
        loading,
        // shopping cart added products data
        cartProducts,
        setCartProducts,
        viewCart,
        isLoading,
        refetch
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;