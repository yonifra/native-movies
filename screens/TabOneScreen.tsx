import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import MoviesList from '../components/MoviesList';
import { Text, View } from '../components/Themed';
import SearchBar from '../components/SearchBar';

function getMovies(url: string) {

}

function onChangeText(text: string) {

}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <MoviesList path="/screens/TabOneScreen.tsx" items={[]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272532',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  searchBar: {
    fontSize: 15,
    color: '#83CFDF'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
