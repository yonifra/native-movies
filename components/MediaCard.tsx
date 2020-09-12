import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Movie } from '../types'

const openMovie = e => {
    console.log('Not yet implemented')
}

const MediaCard = ({ movie }: { movie: Movie }) => {
    console.log('Rendering movie:', movie);

    return (
        <TouchableOpacity style={styles.container} onPress={e => openMovie(e)}>
            <Image style={styles.poster} source={{
                uri: 'https://image.tmdb.org/t/p/w94_and_h141_bestv2' + movie.poster_path
            }} />

            <View style={styles.detailContainer}>
                <Text style={styles.header}>{movie.title}</Text>
                <Text style={styles.rating}>{movie.vote_average}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#373B69',
        margin: 4,
        maxWidth: 141,
        borderRadius: 3,
        color: '#EBE5E2',
    },
    header: {
        fontSize: 14,
        fontWeight: '600',
        color: '#EBE5E2'
    },
    poster: {
        height: 141,
        width: 94
    },
    detailContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    rating: {
        borderRadius: 3,
        padding: 3,
        backgroundColor: '#272532',
        color: '#83CFDF'
    },
})

export default MediaCard;