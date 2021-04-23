import React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, Dimensions, ScrollView, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import { useIsFocused } from "@react-navigation/native"
import Tts from 'react-native-tts';
import {ColorPicker} from 'react-native-color-picker'

//<------StyleSheet------------->
const getStyles = (backgroundColor) => {
	return StyleSheet.create({
		outerViewStyle: {
			backgroundColor: backgroundColor,
			height: '100%',
			width: '100%',
			top: 0,
			left: 0
		},
		firstModalStyle: {
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
		},
		firstModalCheckmark: {
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
		},
		firstModalXMark: {
			width: 50,
			height: 50,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			borderWidth: 1,
			borderRadius: 5,
			marginTop: 10,
			backgroundColor: 'red'
		},
		touchableBackground: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			zIndex: 2
		},
		XButton: {
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
		},
		textInputStyle: {
			justifyContent: "center",
			alignItems: "center",
			borderWidth: 2,
			borderRadius: 10,
			backgroundColor: '#d8ebe4',
			width: '80%',
			color: 'black'
		},
		commandModal: {
			width: commandScreenSize,
			height: commandScreenSize,
			top: '50%',
			left: '50%',
			transform: [
				{translateX: -0.5 * commandScreenSize},
				{translateY: -0.5 * commandScreenSize}
			],
			backgroundColor: 'cyan',
			borderWidth: 3,
			borderRadius: 10,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			zIndex: 5
		},
		mainViewStyle: {
			backgroundColor: backgroundColor,
			height: '85%',
			width: '100%',
			top: 0,
			left: 0
		},
		scrollViewStyle: {
			backgroundColor: backgroundColor,
			zIndex: 1,
			height: '85%'
		},
		headerLabel: {
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
		},
		headerLabelText: {
			paddingTop: 25,
			paddingBottom: 25,
			fontSize: 30,
			justifyContent: 'center',
			alignItems: 'center'
		},
		commandButtons: {
			paddingTop: 25,
			paddingBottom: 25,
			fontSize: 25,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: 'red',
			width: '45%',
			marginTop: 25,
			marginRight: '1.67%',
			marginLeft: '1.67%',
			borderStyle: 'solid',
			borderColor: 'black',
			borderWidth: 2,
			borderRadius: 10,
			elevation: 4
		},
		footer: {
			position: 'absolute',
			display: 'none',
			bottom: 0,
			right: 0,
			height: '15%',
			width: '100%',
			backgroundColor: backgroundColor,
			zIndex: 1,
			borderTopColor: 'black',
			borderTopWidth: 3
		},
		footerButton: {
			width: 70,
			height: 70,
			borderWidth: 3,
			borderRadius: 35,
			backgroundColor: backgroundColor,
			position: 'absolute',
			top: '50%',
			transform: [{translateY: -35}],
			alignItems: 'center',
			justifyContent: 'center',
			zIndex: 2
		},
		leftModal: {
			position: 'absolute',
			top: 0,
			left: 0,
			height: '100%',
			width: (screenWidth - 200) / 2,
			backgroundColor: 'lime'
		},
		rightModal: {
			position: 'absolute',
			top: 0,
			right: 0,
			height: '100%',
			width: (screenWidth - 200) / 2,
			backgroundColor: 'lime'
		},
		topModal: {
			position: 'absolute',
			top: 0,
			left: (screenWidth - 200) / 2,
			height: (screenHeight - 200) / 2,
			width: 200,
			backgroundColor: 'lime'
		},
		bottomModal: {
			position: 'absolute',
			bottom: 0,
			left: (screenWidth - 200) / 2,
			height: (screenHeight - 200) / 2,
			width: 200,
			backgroundColor: 'lime'
		},
		outerModalView: {
			position: 'absolute',
			top: 0,
			left: 0,
			height: '100%',
			width: '100%',
			backgroundColor: 'blue',
			opacity: 0,
			zIndex: -1
		}
	})
}

//<---------Constants----------->
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width
const commandScreenSize = screenWidth * 0.8

const FolderMenu = (  {route, navigation} ) =>
{
	
	const {backgroundColor, text, commandArray} = route.params;
	const [modalVisible, setModalVisible] = useState(false)
	const [modalData, setModalData] = useState('')
	const [secondModalVisible, setSecondModalVisible] = useState(false)
	const [stateText, setText] = useState('')
	const [commandModalVisible, setCommandModalVisible] = useState(false)
	const [commandModalData, setCommandModalData] = useState('')

	const styles = getStyles(backgroundColor)

	useIsFocused();

	return(

		<View style = {styles.outerViewStyle}>
			
			{/* <------------------------------>
							Modals
				<------------------------------>
			*/}

			{/*First Modal - Delete Confirmation */}
			<Modal
				animationType = 'slide'
				transparent = {true}
				visible = {modalVisible}
				onRequestClose = {() => {
					setModalVisible(!modalVisible)
				}}
			>
				<View style = {styles.firstModalStyle}>
					<Text style = {{fontSize: 20}}>Delete Command?</Text>

					<View style = {{
						display: 'flex',
						flexDirection: 'row'
					}}>
						<TouchableOpacity
							style = {styles.firstModalCheckmark}
							onPress = {() => {
								setModalVisible(false)

								for (let i = 0; i < commandArray.length; i++)
								{
									if (commandArray[i] == modalData)
										commandArray.splice(i, 1)
								}
							}}
						>
							<Text style = {{fontSize: 30, fontWeight: 'bold'}}>✓</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style = {styles.firstModalXMark}
							onPress = {() => {
								setModalVisible(false)
							}}
						>
							<Text style = {{fontSize: 30}}>✘</Text>
						</TouchableOpacity>
					</View>
				</View>
				
				<View style = {styles.outerModalView}>
					<TouchableOpacity style = {styles.leftModal} onPress = {() => setModalVisible(false)}/>
					<TouchableOpacity style = {styles.topModal} onPress = {() => setModalVisible(false)}/>
					<TouchableOpacity style = {styles.rightModal} onPress = {() => setModalVisible(false)}/>
					<TouchableOpacity style = {styles.bottomModal} onPress = {() => setModalVisible(false)}/>
				</View>
			</Modal>
 
			{/* <--------------------------------->
						Add Command Modal
				<--------------------------------->
			*/}

			<Modal
				animationType = 'slide'
				transparent = {true}
				visible = {secondModalVisible}
				onRequestClose = {() => {
					setSecondModalVisible(!secondModalVisible)
			}}>
				<View style = {styles.firstModalStyle}>
					<TouchableOpacity 
					style = {styles.XButton}
					onPress = {() => {
						setSecondModalVisible(false)
					}}>
						<Text style = {{fontSize: 20,}}>✘</Text>
					</TouchableOpacity>

					<Text>Add Command</Text>
					<TextInput
						style = {styles.textInputStyle}
						placeholder = "Type Command Here"
						placeholderTextColor = 'gray'
						onChangeText = {stateText => setText(stateText)}
						onSubmitEditing = {() => {
							commandArray.push(stateText)
							setSecondModalVisible(false)
						}}
					/>
				</View>

				<View style = {styles.outerModalView}>
					<TouchableOpacity style = {styles.leftModal} onPress = {() => setSecondModalVisible(false)}/>
					<TouchableOpacity style = {styles.topModal} onPress = {() => setSecondModalVisible(false)}/>
					<TouchableOpacity style = {styles.rightModal} onPress = {() => setSecondModalVisible(false)}/>
					<TouchableOpacity style = {styles.bottomModal} onPress = {() => setSecondModalVisible(false)}/>
				</View>
			</Modal>
				
			{/* <------------------------------>
						Command Modal
				<------------------------------>
			*/}

			<Modal				
				animationType = 'slide'
				transparent = {true}
				visible = {commandModalVisible}
				onRequestClose = {() => {
					setCommandModalVisible(!commandModalVisible)
			}}>

				<View
					style = {styles.commandModal}>
						<TouchableOpacity 
							style = {styles.XButton}
							onPress = {() => {
								setCommandModalVisible(false)
							}}>
								<Text style = {{fontSize: 20,}}>✘</Text>
						</TouchableOpacity>

						<Text style = {{fontSize: screenHeight / 15}}>{commandModalData}</Text>
					</View>
					<TouchableOpacity 
						style = {styles.touchableBackground}
						onPress = {() => setCommandModalVisible(false)}
					/>
			</Modal>

			{/* <-------------------------------->
							Main Body
				<-------------------------------->
			*/}
			<View style = {styles.mainViewStyle}>

				<ScrollView style = {styles.scrollViewStyle}>
					<View style = {styles.headerLabel}>
						<Text style = {styles.headerLabelText}>
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
								style = {styles.commandButtons}
								onPress = {() => {
									Tts.speak(item)
									setCommandModalVisible(true)
									setCommandModalData(item)
								}}
								onLongPress = {() => {
									setModalVisible(true)
									setModalData(item)
								}}
								>
									<Text>{item}</Text>
								</TouchableOpacity>
							))}
					</View>
				</ScrollView>
			</View>

			{/* <------------------------------>
							Footer
				<------------------------------>
			*/}
			<View style = {styles.footer}>
				<TouchableOpacity style = {[styles.footerButton, {left: '77%'}]}			
					onPress = {() => {
						setSecondModalVisible(true)
					}}
					>
						<Text style = {{fontSize: 30, top: 0}}>+</Text>
					</TouchableOpacity>

					<TouchableOpacity style = {[styles.footerButton, {left: '3%'}]}
					onPress = { () => {
						navigation.goBack();
					}}
					>
						<Text style = {{fontSize: screenHeight / 20}}>←</Text>
					</TouchableOpacity>
			</View>
		</View>
	)
}

export default FolderMenu;