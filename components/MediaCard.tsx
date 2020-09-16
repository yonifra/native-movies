import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import DetailsScreen from '../screens/DetailsScreen'
import { Movie } from '../types'
import Modal from 'react-native-modal'

const getYear = (dateString: string): string => {
    const year = new Date(dateString).getFullYear().toString();
    if (year === 'NaN') {
        return 'N/A'
    }

    return year
}

const MediaCard = ({ movie }: { movie: Movie }) => {
    const [isModalOpen, setModalOpen] = React.useState(false)

    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            setModalOpen(true)
        }}>
            <Modal isVisible={isModalOpen}>
                <View style={{ flex: 1 }}>
                    <DetailsScreen data={movie} />
                    <Button onPress={() => setModalOpen(false)} title='Dismiss' />
                </View>
            </Modal>

            <Image style={styles.poster} source={{
                uri: movie.poster_path ? 'https://image.tmdb.org/t/p/w94_and_h141_bestv2' + movie.poster_path : 'https://via.placeholder.com/150/000000/FFFFFF/?text=No poster'
            }} />

            <View style={styles.detailContainer}>
                <Text style={styles.title}>{movie.title}</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.releaseDate}>{getYear(movie.release_date)}</Text>
                    <Text style={styles.rating}>{movie.vote_average === 0 ? 'N/A' : movie.vote_average}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#373B69',
        margin: 4,
        width: 140,
        height: 220,
        borderRadius: 5,
        color: '#EBE5E2',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        elevation: 1,
        shadowRadius: 5,
        shadowOffset: { width: 4, height: 4 },
        flex: 1
    },
    title: {
        fontSize: 14,
        flex: 3,
        color: '#EBE5E2',
        overflow: 'hidden',
        letterSpacing: -0.2
    },
    poster: {
        flex: 4,
        height: '100%',
        width: '100%'
    },
    detailContainer: {
        padding: 5,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%'
    },
    rating: {
        flex: 1,
        borderRadius: 3,
        textAlign: 'center',
        padding: 3,
        fontSize: 12,
        backgroundColor: '#272532',
        color: '#83CFDF',
        justifyContent: 'center', //Centered vertically
    },
    infoRow: {
        flexDirection: 'row',
        flex: 2
    },
    releaseDate: {
        flex: 3,
        textAlign: 'left',
        justifyContent: 'center', //Centered vertically
        color: '#83CFDF',
        fontSize: 10
    }
})

export default MediaCard;