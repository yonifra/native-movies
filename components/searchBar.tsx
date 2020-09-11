import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const search = (query: string) => {
    // TODO: search for movie / series here
}

const SearchBar = () => {
    const [value, onChangeText] = React.useState('');

    return (
        <TextInput
            style={styles.searchBar}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder='Search'
            autoCompleteType='off'
        />
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#373B69',
        justifyContent: 'flex-start',
        flex: 1,
    },
    searchBar: {
        padding: 10,
        margin: 15,
        width: '85%',
        borderRadius: 20,
        borderColor: '#708ED2',
        borderStyle: 'solid',
        borderWidth: 1,
        alignItems: 'center',
        fontSize: 15,
        color: '#708ED2'
    }
});

export default SearchBar;