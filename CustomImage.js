import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';

const CustomImage = ({ uri, style }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const preloadImage = async () => {
      try {
        if (uri) {
          await Image.prefetch(uri);
          if (isMounted) {
            setLoaded(true);
          }
        } else {
          console.warn('Image URI is null or undefined');
        }
      } catch (error) {
        console.error('Error preloading image:', error);
      }
    };
    preloadImage();

    return () => {
      isMounted = false;
    };
  }, [uri]);

  return (
    <View style={style}>
      {loaded && uri ? (
        <Image
          source={{ uri }}
          style={style}
        />
      ) : (
        <View style={[style, styles.placeholder]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    backgroundColor: '#e0e0e0', // Grey placeholder background
  },
});

export default CustomImage;
