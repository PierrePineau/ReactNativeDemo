import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useEffect, useState} from 'react';

const AuthContext = createContext({
    user: null,
    setUser: (user: any) => {},
    isAuthenticated: false,
    login: ({username, password}: any) => {},
    logout: () => {},
    isLoading: true,
});

const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const login = async ({username, password}: any) => {
        // if (username !== 'pierre@gmail.com' || password !== '123456') {
        //     return Promise.reject();
        // }
        await AsyncStorage.setItem('userToken', 'loremsimpsum');
        setIsAuthenticated(true);
        return Promise.resolve();
    };

    const logout = async () => {
        await AsyncStorage.removeItem('userToken');
        setIsAuthenticated(false);
    };

    const checkAuth = async () => {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    };

    // Vérifier si l'utilisateur est connecté
    useEffect(() => {
        checkAuth();
        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser, isAuthenticated, login, logout, isLoading}}>
            {children}
        </AuthContext.Provider>
    );
};

export {
    AuthContext,
    AuthProvider,
};
