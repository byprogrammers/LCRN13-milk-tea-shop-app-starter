import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Rewards = () => {
    return (
        <View style={styles.container}>
            <Text>Rewards</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Rewards;