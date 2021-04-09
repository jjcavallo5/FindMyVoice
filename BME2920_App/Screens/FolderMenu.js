import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, ScrollView, TouchableOpacity} from 'react-native'; 
import Tts from 'react-native-tts';

const FolderMenu = (  {route, navigation} ) =>
{
	const {backgroundColor, text, commandArray} = route.params;
	return(
		<ScrollView style = {{
			backgroundColor: backgroundColor
		}}>
			<View style = {{
				backgroundColor: JSON.stringify(backgroundColor),
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'cyan',
				borderWidth: 5,
				borderRadius: 20,
				width: '70%',
				marginLeft: '15%',
				marginTop: '5%'
			}}>
				<Text style = {{
					paddingTop: 25,
					paddingBottom: 25,
					fontSize: 30,
					justifyContent: 'center',
					alignItems: 'center'
				}}>
					{text} Menu
				</Text>
			</View>

			{/* 
			<------------------------------->
						Button Array
			<------------------------------->
			*/}

			<View style = {{
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'row',
				flexWrap: 'wrap'
			}}>
					{commandArray.map(item => (
						<TouchableOpacity style = {{
							paddingTop: 25,
							paddingBottom: 25,
							fontSize: 25,
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: 'red',
							width: '45%',
							marginTop: 25,
							marginRight: '3.33%',
							borderStyle: 'solid',
							borderColor: 'black',
							borderWidth: 2,
							borderRadius: 10
						}}
						onPress = {() => {
							Tts.speak(item)
							navigation.navigate("Command", {
								backgroundColor: 'red',
								command: item
							});
						}}
						>
							<Text>
								{item}
							</Text>
						</TouchableOpacity>
					))}
			</View>
		</ScrollView>
	)
}

export default FolderMenu;