import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Movie } from '../types'

const openMovie = e => {
    console.log(e)
}

const MediaCard = ({ movie }: { movie: Movie }) => {
    console.log('Got movie:', movie);

    return (
        <TouchableOpacity style={styles.container} onPress={e => openMovie(e)}>
            <Image style={styles.poster} source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }} />

            <View style={styles.detailContainer}>
                <Text style={styles.header}>Movie Name</Text>
                <Text style={styles.rating}>8.2</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#373B69',
        margin: 4,
        borderRadius: 3,
        color: '#EBE5E2',
    },
    header: {
        fontSize: 12,
        color: '#EBE5E2'
    },
    poster: {
        height: 150,
        width: 130
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