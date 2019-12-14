import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IndexPage from './src/pages/index'

export default function App() {
  return (
    
      <IndexPage/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
