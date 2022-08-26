// import React, {useState} from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Login from '../Screens/Login';
// import {CustomDrawer} from '../Components/CustomDrawer';
// import CustomBottomTab from '../Components/CustomBottomTab';
// import Home from '../Screens/Home';


// const AuthStack = createNativeStackNavigator();
// const AppStack = createNativeStackNavigator();

// export const AuthNavigation = () => {
//   //const [isAuth, setIsAuth] = useState(false);
//   return (
//     <AuthStack.Navigator
//       screenOptions={{headerShown: false}}
//       initialRouteName={'login'}
//     >
//       <AuthStack.Screen name="login" component={Login} />
//     </AuthStack.Navigator>
//   );
// };

// export const AppNavigation = () => {
//   // const [isSignedIn, setIsSignedIn] = useState(true);
//   return (
//     <AppStack.Navigator
//       screenOptions={{headerShown: false}}
//       //initialRouteName={'BottomTabBar'}
//       >
//       <AppStack.Screen name="HomeScreen" component={Home} />
//       <AppStack.Screen name="Drawer" component={CustomDrawer} />
//       <AppStack.Screen name="BottomTab" component={CustomBottomTab} />
//     </AppStack.Navigator>
//   );
// };
