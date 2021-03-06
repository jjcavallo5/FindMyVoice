import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, ScrollView, TouchableOpacity} from 'react-native'; 
import Tts from 'react-native-tts';
import Folder from '../Folders/Folder.js';
import {ColorPicker} from 'react-native-color-picker'

//Get Dimensions, store in constant
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
let paddingHeight = screenHeight / 29.6;

//-------------------------------
//STYLE SHEET
//-------------------------------
const styles = StyleSheet.create({
	header: {
		justifyContent: "center",
		alignItems: "center",
		paddingTop: paddingHeight,
		paddingBottom: paddingHeight,
		backgroundColor: "#282846"
	},
	folderRow:
	{
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		paddingBottom: paddingHeight
	},
	textInput:
	{
		fontSize: screenWidth / 18,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		backgroundColor: '#d8ebe4',
		width: '80%',
		color: 'black',
	},
	inputTextButton:
	{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,
		borderLeftWidth: 0,
		borderBottomRightRadius: 10,
		borderTopRightRadius: 10,
		width: '20%',
		height: screenHeight / 13,
		backgroundColor: 'lime'
	}

});
//-------------------------------

let favoritesArray = ["Hello", "Goodbye"];
let emotionsArray = ["Happy", "Sad", "Mad", "Scared", "Disgusted", "Surprised"];
let needsArray = ["Food", "Water", "Bathroom", "I'm Cold", "I'm Hot"];
let wantsArray = ["Television", "Phone"];
let activitiesArray = ["Walk", "Run", "Swim", "Bike", "Play"];
let schoolArray = ["Pen", "Pencil", "Ruler", "Scissors"];
let foodArray = ["Hamburger", "French Fries", "Drink", "Ice Cream"];
let numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let greetingsArray = ["Hello", "Goodbye", "Thank You", "I'm Sorry"];

const Header = (props) => {
    return(
      <Text
		style = {{
			fontSize: (screenWidth / 6) - (screenWidth / 45),
			fontWeight: "bold",
			backgroundColor: "#d8ebe4",
			borderWidth: 2,
			borderRadius: 10,
			padding: 10
		}}
      >{props.text}</Text>
    )
}

const TextToSpeech = () =>{
	const[text, setText] = React.useState('');
	const onSubmitEditing = () => {
		setText('')
		Tts.speak(text)
		
	}
	return(
		<View style = {{
			display: 'flex',
			flexDirection: 'row'
		}}>
			<TextInput
			style = {styles.textInput}
			placeholder = "Type here to talk!"
			placeholderTextColor = 'gray'
			onChangeText = {text => setText(text)}
			onSubmitEditing = {onSubmitEditing}
			value = {text}
			/>
			<TouchableOpacity style = {styles.inputTextButton}
			onPress = {() => {
				Tts.speak(text)
				setText('')
			}}>
				<Text style = {{fontSize: screenHeight / 20}}>???</Text>
			</TouchableOpacity>
		</View>
	);
}

const MainMenu = () => {
  return(
	//Main Body View
	<ScrollView style = {{
		flexDirection: "column",
		backgroundColor: "#007580"
		}}>

		{/* Header View */}
    	<View
			style = {[styles.header, {
				flexDirection: "row"
			}]}
		>
      		<Header text = "Find My Voice" />
   	 	</View>

		<View style = {{
			height: 5,
			width: "100%",
			backgroundColor: 'black',
			marginBottom: paddingHeight
		}}>

		</View>

		{/* Text - to - speech bar View */}
		<View
		style = {{
			paddingBottom: 25,
			paddingLeft: 25,
			paddingRight: 25
		}}>
			<TextToSpeech/>
		</View>

		{/* First Button Row View */}
		<View
		style = {[styles.folderRow, {
			flexDirection: "row"
		}]}>
			<Folder backgroundColor = "#FA4679"
				buttonText = "Favorites" 
				folderType = "Favorites" 
				commandArray = {favoritesArray}
			/>
			<Folder 
				backgroundColor = "#F0A8ED" 
				buttonText = "Emotions" 
				folderType = "Emotions"
				commandArray = {emotionsArray}
			/>
			<Folder 
				backgroundColor = "#4096E3"//"#FF0071" 
				buttonText = "Needs" 
				folderType = "Needs"
				commandArray = {needsArray}
			/>
		</View>

		{/* Second Button Row View */}
		<View
			style = {[styles.folderRow, {
				flexDirection: "row"
		}]}>
			<Folder 
				backgroundColor = "#FF683E" 
				buttonText = "Wants" 
				folderType = "Wants"
				commandArray = {wantsArray}
			/>
			<Folder 
				backgroundColor = "#FFBB33" 
				buttonText = "Activities" 
				folderType = "Activities"
				commandArray = {activitiesArray}
			/>
			<Folder 
				backgroundColor = "#F9F871" 
				buttonText = "School" 
				folderType = "School"
				commandArray = {schoolArray}
			/>
		</View>

		{/* Third Buttom Row View */}
		<View
			style = {[styles.folderRow, {
				flexDirection: "row"
		}]}>
			<Folder 
				backgroundColor = "#9BDE7E" 
				buttonText = "Food" 
				folderType = "Food"
				commandArray = {foodArray}
			/>
			<Folder 
				backgroundColor = "#4BBC8E" 
				buttonText = "Numbers" 
				folderType = "Numbers"
				commandArray = {numbersArray}
			/>
			<Folder 
				backgroundColor = "#4BDBE3" 
				buttonText = "Greetings" 
				folderType = "Greetings"
				commandArray = {greetingsArray}
			/>
		</View>
	</ScrollView>
  )
}

export default MainMenu;