import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/login';
import Singup from '../Screens/signup';
import Home from '../Screens/home';
import Display from '../Screens/display'
import User from '../Screens/user';
import Cart from '../Screens/cart';
// import AdminProduct from '../Screens/adminProduct';
// import Setting from '../Screens/setting';
// import AdminUser from '../Screens/adminUser';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Display} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={Singup} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Cart" component={User} options={{headerShown: false}}/>
        <Stack.Screen name="User" component={Cart} options={{headerShown: false}}/>
        {/* <Stack.Screen name="AdminProduct" component={AdminProduct} options={{ headerShown: false }} />
        <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
        <Stack.Screen name="AdminUser" component={AdminUser} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;