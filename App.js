import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './routes/DrawerNav';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} options={{ title: 'Connexion' }} />
                <Stack.Screen name="Home" component={DrawerNav} options={{ title: 'Connexion' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
