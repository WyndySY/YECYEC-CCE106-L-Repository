import React, { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { studentsData } from '../data/students';
import StudentCard from '../components/StudentCard';

export default function DirectoryScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Filters list by name in real-time as the user types
  const filteredStudents = studentsData.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search students by name..."
        placeholderTextColor="#94a3b8"
        value={searchQuery}
        onChangeText={setSearchQuery}
        clearButtonMode="while-editing"
      />

      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StudentCard
            student={item}
            onPress={() => router.push(`/students/${item.id}`)}
          />
        )}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No matching students found.</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchBar: {
    height: 48,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#1e293b',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 24,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: '500',
  },
});
