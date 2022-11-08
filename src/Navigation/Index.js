import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDoApp from '../Screens/Home/ToDoApp';
import Category from '../Screens/category/TaskCategory'
import InputText from '../Screens/userinput/InputText';


 
const Stack = createNativeStackNavigator();

class Index extends Component {
    render() {
        return (
            <NavigationContainer>
                {/* initialRouteName="Home" screenOptions={{ headerShown: false }} */}
                <Stack.Navigator initialRouteName="HOME">
                    <Stack.Screen name="HOME" component={ToDoApp} />
                    <Stack.Screen name="CATEGORY" component={Category} />
                    <Stack.Screen name="USERINPUT" component={InputText} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
} 
export default Index;