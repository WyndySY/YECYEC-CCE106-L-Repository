import {StyleSheet, Text, View} from 'react-native';

export default function StatCard(props) {
    return(
        <View style={[styles.card, {backgroundColor: props.bgColor}]}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.value}>{props.value}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
card: {
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    width: '100%',
    borderWidth: 3,
    borderColor: '#9A9A9A',
},
title: {
    fontSize: 16,
    color: '#E1E7EA',
    fontWeight: '600',
},
value: {
    fontSize: 28,
    color: '#FCFAF5',
    fontWeight: 'bold',
    marginTop: 5,
},
});