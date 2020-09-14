import * as React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { View } from '../components/Themed';
import { Movie } from '../types';

export default function DetailsScreen({ data }: { data: Movie }) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', backgroundColor: 'transparent' }}>
                <Image style={styles.poster} source={{
                    uri: data.poster_path ? 'https://image.tmdb.org/t/p/w94_and_h141_bestv2' + data.poster_path : 'https://via.placeholder.com/150/000000/FFFFFF/?text=No poster'
                }} />
                <View style={{ flexDirection: 'column', backgroundColor: 'transparent', flex: 2 }}>
                    <Text style={styles.voteString}>{data.vote_average}</Text>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.regularText}>{new Date(data.release_date).toLocaleDateString()}</Text>
                </View>
            </View>
            <Text style={styles.overview}>{data.overview}</Text>
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
    title: {
        fontSize: 24,
        color: '#708ED2'
    },
    regularText: {
        fontSize: 14,
        color: '#FFF'
    },
    voteString: {
        fontSize: 14,
        color: '#FFF',
        marginTop: 20
    },
    overview: {
        fontSize: 18,
        color: '#FFF',
        padding: 20
    },
    poster: {
        height: 141,
        flex: 1,
        width: 94,
        margin: 20,
        flexDirection: 'row'
    },
});
