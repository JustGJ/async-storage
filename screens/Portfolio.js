import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Portfolio = ({ navigation }) => {
    const handlePress = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Portfolio</Text>
            <Button title="revenir vers Home" onPress={handlePress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    },
});

export default Portfolio;
