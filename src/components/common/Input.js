import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput />
    </View>
  );
};

export { Input };
