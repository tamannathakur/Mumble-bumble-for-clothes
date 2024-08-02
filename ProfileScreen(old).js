import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, SectionList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const ProfileScreen = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = await getToken();
        const response = await axios.get('https://mumble-backend-8az2.onrender.com/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const getToken = async () => {
    // Add your logic to get the token, for example:
    const user = auth().currentUser;
    return user ? await user.getIdToken() : null;
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error fetching profile: {error.message}</Text>;
  }

  const sections = [
    { title: 'Vouchers', data: [{ name: '10% OFF', expires: '31/12/2024' }] },
    { title: 'Outfits', data: [{ id: '1', name: 'Summer Dress', image: require('./assets/summer_dress.png'), likes: 120 }] },
    { title: 'Saved Outfits', data: [{ id: '2', name: 'Winter Coat', image: require('./assets/winter_coat.png'), likes: 200 }] },
    { title: 'Badges', data: [{ id: 'badge1', image: require('./assets/badge1.png') }] },
    { title: 'Preferences', data: profile.userPreferences },
  ];

  const renderItem = ({ item, section }) => {
    if (section.title === 'Vouchers') {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.voucher, item.expired && styles.expiredVoucher]}
        >
          <Text style={styles.voucherName}>{item.name}</Text>
          <Text style={styles.voucherExpires}>{item.expires}</Text>
        </TouchableOpacity>
      );
    } else if (section.title === 'Outfits' || section.title === 'Saved Outfits') {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.outfit}
        >
          <Image source={item.image} style={styles.outfitImage} />
          <Text style={styles.outfitName}>{item.name}</Text>
          <View style={styles.likesContainer}>
            <Text style={styles.likes}>{item.likes}</Text>
            <Image source={require('./assets/heart.png')} style={styles.heartIcon} />
          </View>
        </TouchableOpacity>
      );
    } else if (section.title === 'Badges') {
      return (
        <View style={styles.badgeContainer}>
          <Image source={item.image} style={styles.badgeImage} />
        </View>
      );
    } else if (section.title === 'Preferences') {
      return <Text style={styles.preference}>{item}</Text>;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.initialsCircle}
        >
          <Text style={styles.initials}>TT</Text>
        </TouchableOpacity>
        <View style={styles.statsContainer}>
          <Text style={styles.statsLabel}>Daily Swipes</Text>
          <Text style={styles.statsValue}>24/30</Text>
          <View style={styles.separator}>
            <View style={styles.pinkLine} />
            <View style={styles.greyLine} />
          </View>
          <Text style={styles.statsLabel}>Available Points</Text>
          <Text style={styles.statsValue}>1200</Text>
        </View>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  initialsCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 9,
  },
  initials: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  separator: {
    flexDirection: 'row',
    height: 4,
    width: '70%',
    marginVertical: 20,
  },
  pinkLine: {
    flex: 8,
    backgroundColor: '#E91E63',
  },
  greyLine: {
    flex: 2,
    backgroundColor: '#ccc',
  },
  statsContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 40,
  },
  statsLabel: {
    fontSize: 14,
    color: '#666',
  },
  statsValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  voucher: {
    width: 200,
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#E91E63',
    marginHorizontal: 8,
  },
  expiredVoucher: {
    backgroundColor: '#ccc',
  },
  voucherName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  voucherExpires: {
    fontSize: 14,
    color: '#fff',
  },
  outfit: {
    width: 150,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  outfitImage: {
    width: '100%',
    height: 120,
  },
  outfitName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center',
  },
  badgeContainer: {
    width: 40,
    height: 40,
    marginHorizontal: 8,
  },
  badgeImage: {
    width: '100%',
    height: '100%',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 8,
  },
  likes: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 4,
  },
  heartIcon: {
    width: 16,
    height: 16,
  },
  preference: {
    fontSize: 16,
    marginVertical: 4,
  },
});

export default ProfileScreen;
