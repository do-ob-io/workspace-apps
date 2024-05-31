import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';

import './global.css';
import React from 'react';

export default function Route() {
  const { colorScheme } = useColorScheme();

  return (
    <View className='flex-1 bg-background'>
      <View className="flex-1 items-center justify-center">
        <Text
          selectable={false}
          className='text-foreground'
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
  );
}
