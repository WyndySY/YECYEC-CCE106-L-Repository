import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#202020' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: '700' },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Student Directory' }} />
      <Stack.Screen name="students/[id]" options={{ title: 'Student Profile' }} />
    </Stack>
  );
}
