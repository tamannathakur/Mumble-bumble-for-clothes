import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './AuthContext'; 
import { Text } from 'react-native';
//require('dotenv').config();

import EditProfileScreen from './EditProfileScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import PointsScreen from './PointsScreen';
import OutfitDetails from './OutfitDetails';
import AddOutfitScreen from './AddOutfitScreen';
import SavedOutfitsScreen from './SavedOutfitsScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: () => <LogoTitle /> }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerTitle: () => <ProTitle /> }} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen name="Points" component={PointsScreen} />
          <Stack.Screen name="OutfitDetails" component={OutfitDetails} />
          <Stack.Screen name="AddOutfit" component={AddOutfitScreen} />
          <Stack.Screen name="SavedOutfits" component={SavedOutfitsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};
const LogoTitle = () => (
  <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#000' }}>Mumble</Text>
);

const ProTitle = () => (
  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>Profile Section</Text>
);

export default App;
