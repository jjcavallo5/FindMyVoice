import React  from 'react';
import 'react-native-gesture-handler';
import MainMenu from './Screens/MainMenu.js';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FolderMenu from './Screens/FolderMenu.js';
import CommandScreen from './Screens/CommandScreen.js';

// < --------------- Notes ---------------------->

// Link to Colors:
// https://colorhunt.co/palette/264684

//#E3675F

//#E8ABA7, #E3685F, #B0514A

// React Native Documentation:
// https://reactnative.dev/docs/getting-started

// < -------------------------------------------->

//Stack Navigator
const Stack = createStackNavigator();

//Stack of all screens
const NavigationStack = () =>
{
	return(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name = "Main Menu"
					component = {MainMenu}
					options = {{
						headerShown: false
					}}
				/>
				<Stack.Screen
					name = "Favorites"
					component = {FolderMenu}
					options = {{
						headerShown: false
					}}
				/>
				<Stack.Screen
					name = "Emotions"
					component = {FolderMenu}
					options = {{
						headerShown: false
					}}
				/>
				<Stack.Screen
					name = "Needs"
					component = {FolderMenu}
					options = {{
						headerShown: false
					}}
				/>
				<Stack.Screen
					name = "Wants"
					component = {FolderMenu}
					options = {{
						headerShown: false
					}}
				/>
				<Stack.Screen
					name = "Activities"
					component = {FolderMenu}
					options = {{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name = "School"
					component = {FolderMenu}
					options = {{
						headerShown: false
					}}
				/>
				<Stack.Screen
					name = "Food"
					component = {FolderMenu}
					options = {{
						headerShown: false
					}}
				/>
				<Stack.Screen
					name = "Numbers"
					component = {FolderMenu}
					options = {{
						headerShown: false
					}}
				/>
				<Stack.Screen
					name = "Greetings"
					component = {FolderMenu}
					options = {{
						headerShown: false
					}}
				/>
				<Stack.Screen
					name = "Command"
					component = {CommandScreen}
					options = {{
						headerShown: false
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default NavigationStack;

