import React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, Dimensions, ScrollView, TouchableOpacity, Modal} from 'react-native';
import { useIsFocused } from "@react-navigation/native"
import Tts from 'react-native-tts';

const FolderMenu = (  {route, navigation} ) =>
{
	
	const {backgroundColor, text, commandArray} = route.params;
	const [modalVisible, setModalVisible] = useState(false)
	const [modalData, setModalData] = useState('')
	const [secondModalVisible, setSecondModalVisible] = useState(false)
	const [stateText, setText] = useState('')
	useIsFocused();

	return(

		<View style = {{
			backgroundColor: backgroundColor,
			height: '100%',
			width: '100%',
			top: 0,
			left: 0
			}}>
			
			<Modal
				animationType = 'slide'
				transparent = {true}
				visible = {modalVisible}
				onRequestClose = {() => {
					setModalVisible(!modalVisible)
				}}
			>
				<View style = {{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'cyan',
					padding: 0,
					width: 200,
					height: 200,
					borderWidth: 3,
					borderRadius: 10,
					top: '50%',
					left: '50%',
					transform: [
						{translateX: -100},
						{translateY: -100}
					]
				}}>
					<Text style = {{
						fontSize: 20
					}}>
						Delete Command?
					</Text>

					<View style = {{
						display: 'flex',
						flexDirection: 'row'
					}}>
						<TouchableOpacity
							style = {{
								width: 50,
								height: 50,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								borderWidth: 1,
								borderRadius: 5,
								marginRight: 10,
								marginTop: 10,
								backgroundColor: 'lime'
							}}
							onPress = {() => {
								setModalVisible(false)

								for (let i = 0; i < commandArray.length; i++)
								{
									if (commandArray[i] == modalData)
										commandArray.splice(i, 1)
								}
							}}
						>
							<Text style = {{fontSize: 30}}>✓</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style = {{
								width: 50,
								height: 50,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								borderWidth: 1,
								borderRadius: 5,
								marginTop: 10,
								backgroundColor: 'red'
							}}
							onPress = {() => {
								setModalVisible(false)
							}}
						>
							<Text style = {{fontSize: 30}}>✘</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>

			<Modal
				animationType = 'slide'
				transparent = {true}
				visible = {secondModalVisible}
				onRequestClose = {() => {
					setSecondModalVisible(!secondModalVisible)
			}}>
				<View
				style = {{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'cyan',
					padding: 0,
					width: 200,
					height: 200,
					borderWidth: 3,
					borderRadius: 10,
					top: '50%',
					left: '50%',
					transform: [
						{translateX: -100},
						{translateY: -100}
					]
				}}>
					<TouchableOpacity 
					style = {{
						width: 30,
						height: 30,
						backgroundColor: 'red',
						borderRadius: 5,
						borderWidth: 1,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						position: 'absolute',
						top: 5,
						right: 5
					}}
					
					onPress = {() => {
						setSecondModalVisible(false)
					}}>
						<Text style = {{
							fontSize: 20,
							}}>
								✘
							</Text>
					</TouchableOpacity>

					<Text>Add Command</Text>
					<TextInput
						style = {{
							justifyContent: "center",
							alignItems: "center",
							borderWidth: 2,
							borderRadius: 10,
							backgroundColor: '#d8ebe4',
							width: '80%'
						}}
						placeholder = "Type Command Here"
						onChangeText = {stateText => setText(stateText)}
						onSubmitEditing = {() => {
							commandArray.push(stateText)
							setSecondModalVisible(false)
						}}
					/>
				</View>
			</Modal>

			<View style = {{
				backgroundColor: backgroundColor,
				height: '85%',
				width: '100%',
				top: 0,
				left: 0
			}}>

				<ScrollView style = {{
					backgroundColor: backgroundColor,
					zIndex: 1,
					height: '85%'
				}}>
					<View style = {{
						backgroundColor: JSON.stringify(backgroundColor),
						flexDirection: 'row',
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: 'cyan',
						borderWidth: 5,
						borderRadius: 20,
						width: '80%',
						marginLeft: '10%',
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
								<TouchableOpacity 
								key = {item} 
								style = {{
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
								onLongPress = {() => {
									setModalVisible(true)
									setModalData(item)
								}}
								>
									<Text>
										{item}
									</Text>
								</TouchableOpacity>
							))}

							

					</View>
				</ScrollView>
			</View>
			<View style = {{
				position: 'absolute',
				display: 'none',
				bottom: 0,
				right: 0,
				height: '15%',
				width: '100%',
				backgroundColor: backgroundColor,
				zIndex: 1
			}}>
				<TouchableOpacity style = {{
					width: 70,
					height: 70,
					borderWidth: 3,
					borderRadius: 35,
					backgroundColor: JSON.stringify(backgroundColor),
					left: '80%',
					top: '30%',
					alignItems: 'center',
					justifyContent: 'center',
					zIndex: 2
					}}
									
					onPress = {() => {
						setSecondModalVisible(true)
					}}
					>
						<Text style = {{fontSize: 30, top: 0}}>+</Text>
					</TouchableOpacity>

					<TouchableOpacity style = {{
					width: 70,
					height: 70,
					borderWidth: 3,
					borderRadius: 35,
					backgroundColor: JSON.stringify(backgroundColor),
					position: 'absolute',
					left: '3%',
					top: '30%',
					alignItems: 'center',
					justifyContent: 'center',
					zIndex: 2
					}}
					onPress = { () => {
						navigation.goBack();
					}}
					>
						<Text style = {{fontSize: 60, top: -20}}>←</Text>
					</TouchableOpacity>
			</View>
		</View>
	)
}

export default FolderMenu;