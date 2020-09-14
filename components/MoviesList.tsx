import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { Movie } from '../types';
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import MediaCard from '../components/MediaCard';
// import GridList from 'react-native-grid-list';
import { FlatGrid } from 'react-native-super-grid';

export default function MoviesList({ items, navigation }: { items: Movie[], navigation: any }) {
  const renderItem = ({ item, index }: { item: Movie, index: number }) => {
    return (< MediaCard movie={item} key={index} navigation={navigation} />)
  };

  return (
    <View style={styles.container}>
      <FlatGrid
        data={items}
        numColumns={3}
        itemDimension={120}
        spacing={10}
        fixed
        renderItem={renderItem}
        refreshing={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#83CFDF'
  },
  list: {
    // flexDirection: 'row'
  },
  container: {
    flex: 1,
    width: '90%',
    backgroundColor: 'transparent',
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
