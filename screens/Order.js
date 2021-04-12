import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const Order = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Order</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate("OrderDetail")}
            >
                <Text>Navigate to OrderDetail</Text>
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

export default Order;