import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { studentsData } from '../../data/students';

export default function StudentDetailScreen() {
  const { id } = useLocalSearchParams();
  const student = studentsData.find(s => s.id === id);

  if (!student) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Student profile not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerCard}>
        <Image source={{ uri: student.image }} style={styles.avatar} />
        <Text style={styles.name}>{student.name}</Text>
        <Text style={styles.yearBadge}>{student.year}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Course / Program</Text>
        <Text style={styles.value}>{student.course}</Text>

        <Text style={styles.label}>Institutional Email</Text>
        <Text style={styles.value}>{student.email}</Text>

        <Text style={styles.label}>Biography</Text>
        <Text style={styles.bioValue}>{student.bio}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#ef4444',
    fontWeight: '600',
  },
  headerCard: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingVertical: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: '#e0e7ff',
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: 8,
  },
  yearBadge: {
    backgroundColor: '#e0e7ff',
    color: '#4f46e5',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: '600',
    overflow: 'hidden',
  },
  infoSection: {
    padding: 24,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  value: {
    fontSize: 15,
    color: '#334155',
    marginBottom: 20,
    fontWeight: '500',
  },
  bioValue: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
  },
});
