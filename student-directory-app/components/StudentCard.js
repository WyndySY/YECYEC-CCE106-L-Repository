import React from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';

export default function StudentCard({ student, onPress }) {
  return (
    <Pressable 
      style={({ pressed }) => [styles.card, pressed && styles.pressed]} 
      onPress={onPress}
    >
      <Image source={{ uri: student.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{student.name}</Text>
        <Text style={styles.course} numberOfLines={2}>{student.course}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e2e8f0',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 4,
  },
  course: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 18,
  },
});
