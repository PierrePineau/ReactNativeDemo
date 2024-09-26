import React, {createContext, useContext, useState} from 'react';
import './global.css';
import type {PropsWithChildren} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    useColorScheme,
} from 'react-native';

// import {
//     Colors,
//     DebugInstructions,
//     Header,
//     LearnMoreLinks,
//     ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GluestackUIProvider} from './src/components/ui/gluestack-ui-provider';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthContext, AuthProvider} from './src/providers/AuthProvider';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { FavouriteIcon, Icon, PlayIcon, SearchIcon, SettingsIcon } from './src/components/ui/icon';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Profil from './src/screens/Profil';
import Wishlist from './src/screens/Wishlist';
import Login from './src/screens/Login';
import Splash from './src/screens/Splash';

enableScreens();

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        // <SafeAreaView>
        <Home />
        // </SafeAreaView>
    );
};

const SearchScreen = () => {
    return (
        // <SafeAreaView>
        <Search />
        // </SafeAreaView>
    );
};

const ProfilScreen = () => {
    return (
        // <SafeAreaView>
        <Profil />
        // </SafeAreaView>
    );
};

const WishlistScreen = () => {
    return (
        // <SafeAreaView>
        <Wishlist />
        // </SafeAreaView>
    );
};

const LoginScreen = () => {
    return (
        // <SafeAreaView>
        <Login />
        // </SafeAreaView>
    );
};

// const styles = StyleSheet.create({
//     sectionContainer: {
//         marginTop: 32,
//         paddingHorizontal: 24,
//     },
//     sectionTitle: {
//         fontSize: 24,
//         fontWeight: '600',
//     },
//     sectionDescription: {
//         marginTop: 8,
//         fontSize: 18,
//         fontWeight: '400',
//     },
//     highlight: {
//         fontWeight: '700',
//     },
// });

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    const isDarkMode = useColorScheme() === 'dark';

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, 
            tabBarActiveTintColor:  "#F2C94C",   // Couleur du texte et icône actif
            tabBarInactiveTintColor: isDarkMode ? '#fff' : '#000', // Couleur du texte et icône inactif
            tabBarStyle: {
                // Gestion dark and light mode
                backgroundColor: isDarkMode ? '#000' : '#fff', // Couleur de fond 
                paddingBottom: 5,               // Ajustement du padding
                height: 60,                     // Ajuster la hauteur
            },
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({size,focused,color}) => {
                    return (
                        <Icon as={PlayIcon} className={focused ? 'text-primary-500 w-8 h-8' : 'text-white w-8 h-8'}  />
                    );
                  },
            }} />
            <Tab.Screen name="Search" component={SearchScreen} options={{
                tabBarIcon: ({size,focused,color}) => {
                    return (
                        <Icon as={SearchIcon} className={focused ? 'text-primary-500 w-8 h-8' : 'text-white w-8 h-8'} />
                    );
                  },
            }} />
            <Tab.Screen name="Wishlist" component={WishlistScreen} options={{
                tabBarIcon: ({size,focused,color}) => {
                    return (
                        <Icon as={FavouriteIcon} className={focused ? 'text-primary-500 w-8 h-8' : 'text-white w-8 h-8'} />
                    );
                  },
            }} />
            <Tab.Screen name="Profil" component={ProfilScreen} options={{
                tabBarIcon: ({size,focused,color}) => {
                    return (
                        <Icon as={SettingsIcon} className={focused ? 'text-primary-500 w-8 h-8' : 'text-white w-8 h-8'} />
                    );
                  },
            }} />
        </Tab.Navigator>
    );
}

const AuthNavigator = () => {
    const {isLoading, isAuthenticated} = useContext(AuthContext);

    if (isLoading) {
        return (
            <Stack.Screen name="SplashScreen" component={Splash} options={{ headerShown: false, animationTypeForReplace: 'push'}} />
        );
    }

    return (
        <Stack.Navigator>
            {isAuthenticated ? (
                <Stack.Screen name="App" component={AppNavigator} options={{ headerShown: false, animationTypeForReplace: 'push'}} />
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, animationTypeForReplace: 'pop' }} />
            )}
        </Stack.Navigator>
    );
};

export default function App(): React.JSX.Element {
    const colorScheme = useColorScheme();
    const [colorMode, setColorMode] = useState<'light' | 'dark'>(colorScheme === 'dark' ? 'dark' : 'light');

    return (
        <SafeAreaProvider>
            <GluestackUIProvider mode={colorMode}>
                <NavigationContainer>
                    <AuthProvider>
                        <AuthNavigator />
                    </AuthProvider>
                </NavigationContainer>
            </GluestackUIProvider>
        </SafeAreaProvider>
    );
}
