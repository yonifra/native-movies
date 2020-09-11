import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import SearchBar from '../components/searchBar';

function getMovies(url: string) {

}

function onChangeText(text: string) {

}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" items={[]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#373B69',
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
