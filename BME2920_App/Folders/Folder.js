import React from 'react';
import {TouchableOpacity, Image, Text, View, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
const FAVORITES_ICON = require('../images/Star.png');
const EMOTIONS_ICON = require('../images/Emotions.png');
const ACTIVITIES_ICON = require('../images/Activities.png');
const FOOD_ICON = require('../images/Food.png');
const GREETINGS_ICON = require('../images/Greeting.png');
const NEEDS_ICON = require('../images/Needs.png');
const NUMBERS_ICON = require('../images/Numbers.png');
const SCHOOL_ICON = require('../images/School.png');
const WANTS_ICON = require('../images/Wants.png');

//Screen Dimensions
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
let paddingX = screenWidth / 25;
let folderWidth = (screenWidth - 4 * paddingX) / 3;

//Get Icon Source Image
function getIconSource(folderType)
{
	if (folderType == "Favorites")
		return FAVORITES_ICON;
	else if (folderType == "Emotions")
		return EMOTIONS_ICON;
	else if (folderType == "Activities")
		return ACTIVITIES_ICON;
	else if (folderType == "Food")
		return FOOD_ICON;
	else if (folderType == "Greetings")
		return GREETINGS_ICON;
	else if (folderType == "Needs")
		return NEEDS_ICON;
	else if (folderType == "Numbers")
		return NUMBERS_ICON;
	else if (folderType == "School")
		return SCHOOL_ICON;
	else if (folderType == "Wants")
		return WANTS_ICON;
	else
		return FAVORITES_ICON;
}

//Creates a folder object
const Folder = (props) => {
	let icon = getIconSource(props.folderType);
	const navigation = useNavigation();
	return(
		
		<TouchableOpacity
			style = {{
				width: folderWidth,
				height: folderWidth,
				justifyContent: 'center',
				textAlign: 'center',
				borderColor: 'black',
				borderWidth: 2,
				borderRadius: 9,
				backgroundColor: props.backgroundColor
			}}
			onPress = {() => {
				navigation.navigate(props.folderType, {
					backgroundColor: props.backgroundColor,
					text: props.folderType,
					commandArray: props.commandArray
				});
			}}
			>
			<View style = 
			{{
				justifyContent: 'center',
				alignItems: 'center'
			}}>

				<Image source = {icon}
					style = {{
						height: folderWidth * 0.6,
						width: folderWidth * 0.6
					}}
				></Image>
					<Text style = {{
						color: 'black',
						fontSize: folderWidth * 0.2, 
						textAlign: 'center'
						}}
					>
						{props.buttonText}
					</Text>
				</View>
		</TouchableOpacity>
	)
}

export default Folder;