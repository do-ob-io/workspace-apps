import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';

import './global.css';
import React from 'react';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Pressable className={`${colorScheme === 'dark' ? 'dark' : 'light'} theme-${colorScheme} flex-1`} onPress={toggleColorScheme}>
      <View className='flex-1 bg-primary'>
        <View className="flex-1 items-center justify-center bg-primary">
          <Text
            selectable={false}
            className='text-black dark:text-white'
          >
            Hello React-Native/Expo Mobile Application with NativeWind!
          </Text>
          <Text
            selectable={false}
          >
            {colorScheme === 'dark' ? '🌙' : '🌞'}
          </Text>
          <StatusBar style="auto" />
        </View>
      </View>
    </Pressable>
  );
}
