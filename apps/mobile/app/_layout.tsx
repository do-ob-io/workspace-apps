import { Slot } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { View, Pressable } from 'react-native';

export default function IndexLayout() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1">
      <Pressable className={`${colorScheme === 'dark' ? 'dark' : 'light'} ${colorScheme} flex-1`} onPress={toggleColorScheme}>
        <Slot />
      </Pressable>
    </View>
  );
}
