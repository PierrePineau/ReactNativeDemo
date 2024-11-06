import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useEffect, useState} from 'react';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'

const AuthContext = createContext({
    user: null,
    setUser: (user: any) => {},
    isAuthenticated: false,
    login: ({username, password}: any) => {},
    logout: () => {},
    isLoading: true,
    isBiometricSupported: false,
    biometricLogin: () => {},
});

const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [token, setToken] = useState<string | null>(null);

    const [isBiometricSupported, setIsBiometricSupported] = useState<boolean>(false);

    const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true })

    const login = async ({username, password}: any) => {
        // if (username !== 'pierre@gmail.com' || password !== '123456') {
        //     return Promise.reject();
        // }
        await AsyncStorage.setItem('userToken', 'loremsimpsum');
        setToken('loremsimpsum');
        setIsAuthenticated(true);
        return Promise.resolve();
    };

    const biometricLogin = async () => {
        if (!isBiometricSupported) {
            return;
        }
        const { success } = await rnBiometrics.simplePrompt({ promptMessage: 'Biométrie' });
    
        if (success) {
            await AsyncStorage.setItem('userToken', 'loremsimpsum');
            setToken('loremsimpsum');
            setIsAuthenticated(true);
        }
    }

    const logout = async () => {
        await AsyncStorage.removeItem('userToken');
        setToken(null);
        setIsAuthenticated(false);
    };

    const checkAuth = async () => {
        if (!token) {
            setToken(await AsyncStorage.getItem('userToken') ?? null);
        }
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

        // Vérifie la disponibilité de la biométrie
        rnBiometrics.isSensorAvailable()
        .then(result => {
            const { available, biometryType } = result;
            if (available && (biometryType === BiometryTypes.TouchID || biometryType === BiometryTypes.FaceID || biometryType === BiometryTypes.Biometrics)) {
                setIsBiometricSupported(true);
            }
        });
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser, isAuthenticated, login, logout, isLoading, isBiometricSupported, biometricLogin}}>
            {children}
        </AuthContext.Provider>
    );
};

export {
    AuthContext,
    AuthProvider,
};
