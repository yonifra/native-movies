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

                uri: movie.poster_path ? 'https://image.tmdb.org/t/p/w94_and_h141_bestv2' + movie.poster_path : 'https://via.placeholder.com/150/000000/FFFFFF/?text=No poster'
            }} />

            <View style={styles.detailContainer}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.rating}>{movie.vote_average}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#373B69',
        margin: 4,
        maxWidth: 120,
        height: 230,
        borderRadius: 3,
        color: '#EBE5E2',
    },
    title: {
        fontSize: 14,
        flex: 3,
        color: '#EBE5E2',
        overflow: 'hidden',
        letterSpacing: -0.2
    },
    poster: {
        height: 161,
        width: '100%'
    },
    detailContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    rating: {
        flex: 1,
        borderRadius: 3,
        textAlign: 'center',
        padding: 3,
        backgroundColor: '#272532',
        color: '#83CFDF'
    },
})

export default MediaCard;