import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const OrderDetail = () => {
    return (
        <View style={styles.container}>
            <Text>OrderDetail</Text>
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

export default OrderDetail;