import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const TestImageComponent = () => {
  const testUrls = [
    "https://firebasestorage.googleapis.com/v0/b/mumble-8140f.appspot.com/o/1722207142268.png?alt=media",
    "https://www.myntra.com/jeans/kotty/kotty-women-blue-jean-straight-fit-stretchable-jeans/20697592/buy"
  ];

  return (
    <View style={styles.container}>
      {testUrls.map((url, index) => (
        <Image key={index} source={{ uri: url }} style={styles.testImage} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  testImage: {
    width: 300,
    height: 450,
    margin: 10,
    resizeMode: 'cover',
  },
});

export default TestImageComponent;
