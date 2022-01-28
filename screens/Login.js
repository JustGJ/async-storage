import React, { useState, useLayoutEffect, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Login = () => {
    return (
        <View>
            <Text>Login</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#1A91DA',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginBottom: 50,
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 50,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 9,
        textAlign: 'center',
        fontSize: 19,
        marginVertical: 10,
    },
    touchable: {
        marginVertical: 9,
    },
    text: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
    },
    btnContainer: {
        backgroundColor: 'turquoise',
        borderRadius: 7,
        padding: 9,
    },
    btnText: {
        fontSize: 17,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
});
export default Login;
