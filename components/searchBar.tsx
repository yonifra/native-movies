import React, { Component } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

const SearchBar = ({ searchFn, hook }) => {
    const [searchQuery, onChangeText] = React.useState('');

    return (
        <View style={styles.searchRowContainer}>
            <TextInput
                style={styles.searchBar}
                onChangeText={text => onChangeText(text)}
                value={searchQuery}
                placeholder='Search'
                autoCompleteType='off'
                placeholderTextColor='gray'
            />
            <Button title="Go" onPress={async () => {
                const result = await searchFn(searchQuery)
                hook(result)
            }} />
        </View>
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
        color: '#708ED2',
    },
    searchRowContainer: {
        backgroundColor: '#272532',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '90%',
    },
});

export default SearchBar;