import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate("Rewards")}
            >
                <Text>Navigate to Rewards</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("Location")}
            >
                <Text>Navigate to Locations</Text>
            </TouchableOpacity>
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

export default Home;