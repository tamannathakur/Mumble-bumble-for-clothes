import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import config from './src/config'; 
import AuthContext from './AuthContext';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const { login } = useContext(AuthContext); 

  const handleLogin = async () => {
    try {
      const response = await fetch(`${config.apiUrl}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      let result;
      try {
        result = await response.json();
      } catch (e) {
        throw new Error('Invalid JSON response from server');
      }

      if (response.ok) {
        const { user, token } = result; 
        console.log('Received authToken:', token);

      //  login(result.user); // Call login method from context
        //Alert.alert('Success', 'Login successful');
        //navigation.navigate('Home');
        if (token) {
          login(user, token); 
          Alert.alert('Success', 'Login successful');
          navigation.navigate('Home');
        } else {
          throw new Error('No token received');
        }
      } else {
        Alert.alert('Error', result.error || 'An error occurred');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/myntra.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor="#aaa" 
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#aaa" 
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150, 
    height: 50,  
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FF3F6D',
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
