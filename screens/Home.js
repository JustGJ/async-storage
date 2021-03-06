import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Home = ({ navigation }) => {
    const handlePress = () => {
        navigation.navigate('Portfolio');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Pressable
                style={(pressed) => ({
                    backgroundColor: pressed ? 'lightseagreen' : 'rebeccapurple',
                })}
                onPress={handlePress}>
                <Text style={styles.btn}>Vers Portfolio</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    },
    btn: {
        padding: 12,
        color: '#fff',
    },
});

export default Home;
