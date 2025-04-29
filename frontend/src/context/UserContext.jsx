import React, { createContext, useContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    // Initialize userEmail from localStorage if it exists
    const [userEmail, setUserEmail] = useState(() => {
        const savedEmail = localStorage.getItem('userEmail');
        return savedEmail || '';
    });

    const [accessToken, setAccessToken] = useState(() => {
        const savedToken = localStorage.getItem('accessToken');
        return savedToken || '';
    });

    const [workspace, setWorkspace] = useState(null);

    // Update localStorage whenever userEmail changes
    useEffect(() => {
        if (userEmail) {
            localStorage.setItem('userEmail', userEmail);
        } else {
            localStorage.removeItem('userEmail');
        }
    }, [userEmail]);

    // Update localStorage whenever accessToken changes
    useEffect(() => {
        if (accessToken) {
            localStorage.setItem('accessToken', accessToken);
        } else {
            localStorage.removeItem('accessToken');
        }
    }, [accessToken]);

    const updateUserEmail = (email) => {
        setUserEmail(email);
    };

    const updateAccessToken = (token) => {
        setAccessToken(token);
    };

    const updateWorkspace = (workspaceData) => {
        setWorkspace(workspaceData);
    };

    const value = {
        userEmail,
        updateUserEmail,
        accessToken,
        updateAccessToken,
        workspace,
        updateWorkspace
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
} 