import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function FlatButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#993955',
    alignItems: 'center',
    marginVertical: 7,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#e9ecf5',
  }
});