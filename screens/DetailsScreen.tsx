import * as React from 'react';
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

export default function DetailsScreen({ data }: { data: Movie }) {
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
                </InfoHeader>
            </Header>
            <Overview>{data.overview}</Overview>
        </ComponentContainer>
    );
}