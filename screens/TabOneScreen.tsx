import * as React from 'react';
import { StyleSheet } from 'react-native';
import MoviesList from '../components/MoviesList';
import { View } from '../components/Themed';
import SearchBar from '../components/SearchBar';
import { Movie } from '../types';

async function search(query: string): Promise<Movie[]> {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

  try {
    const res = await fetch(url);
    const data = await res.json()
    return data.results
  } catch (error) {
    console.error(error)
    return []
  }
}

export default function TabOneScreen() {
  const [movies, setMovies] = React.useState([]);

  return (
    <View style={styles.container}>
      <SearchBar searchFn={search} hook={setMovies} />
      <MoviesList items={movies} />
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
