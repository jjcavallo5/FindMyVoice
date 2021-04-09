import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, ScrollView} from 'react-native'; 

const CommandScreen = ( {route, navigation} ) =>
{
	const {backgroundColor, command} = route.params;
	return(
		<View style = {{
			backgroundColor: backgroundColor,
			flex: 1,
			alignItems: 'center',
            justifyContent: 'center'
		}}>
			<Text style = {{
				paddingTop: 25,
				paddingBottom: 25,
				fontSize: 50
			}}>
				{command}
			</Text>
		</View>
	)
}

export default CommandScreen;