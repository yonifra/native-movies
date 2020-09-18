import * as React from 'react';
import _ from 'lodash';
import { Movie } from '../types';
import styled from 'styled-components';

const Title = styled.Text`
    font-size: 24px;
    color: #708ED2;
`;

const Poster = styled.Image`
    height: 141px;
    flex: 1;
    width: 94px;
    margin: 20px;
    flex-direction: row;
`

const Overview = styled.Text`
    flex: 1;
    font-size: 18px;
    color: #FFF;
    padding: 20px;
`

const ReleaseDate = styled.Text`
    font-size: 14px;
    color: #FFF;
`

const Votes = styled.Text`
    font-size: 14px;
    color: #FFF;
    margin-top:20px;
`

const ComponentContainer = styled.View`
    background-color: #272532;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
`

const Header = styled.View`
    flex-direction: row;
    background-color: transparent;
`

const InfoHeader = styled.View`
    flex-direction: column;
    background-color: transparent;
    flex: 2
`

const allGenres = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]

export default function DetailsScreen({ data }: { data: Movie }) {
    const genreNames = _.map(_.filter(allGenres, genre2 => _.includes(data.genre_ids, genre2.id)), res => res.name)
    const allGenresFormatted = _.forEach(genreNames, name => name).join(', ')

    return (
        <ComponentContainer>
            <Header>
                <Poster source={{
                    uri: data.poster_path ? 'https://image.tmdb.org/t/p/w94_and_h141_bestv2' + data.poster_path : 'https://via.placeholder.com/150/000000/FFFFFF/?text=No poster'
                }} />
                <InfoHeader>
                    <Votes>{data.vote_average === 0 ? 'Not rated' : data.vote_average}</Votes>
                    <Title>{data.title}</Title>
                    <ReleaseDate>{new Date(data.release_date).toLocaleDateString()}</ReleaseDate>
                    <ReleaseDate>{allGenresFormatted}</ReleaseDate>
                </InfoHeader>
            </Header>
            <Overview>{data.overview}</Overview>
        </ComponentContainer>
    );
}