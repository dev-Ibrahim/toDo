import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddListScreen, HomeScreen, ListDetailsScreen } from './src/screens';
import { TodoProvider } from './src/context';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <TodoProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="AddList" component={AddListScreen} />
            <Stack.Screen name="ListDetails" component={ListDetailsScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </TodoProvider>
  );
};

export default App;
