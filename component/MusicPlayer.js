import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const MusicPlayer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}></View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomControls}>
          <Ionicons name="heart-outline" size={30} color="#777777" />
          <Ionicons name="repeat" size={30} color="#777777" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    borderTopColor: '#393E46',
    borderTopWidth: 1,
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
  },
  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});
