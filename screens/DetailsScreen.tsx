import * as React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { View } from '../components/Themed';

export default function DetailsScreen({ navigation }) {
    const [movie, setMovie] = React.useState();

    return (
        <View style={styles.container}>
            <Text>Movie details</Text>
            <Button onPress={() => navigation.goBack()} title='Dismiss' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#272532',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});
