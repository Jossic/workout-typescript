import React, { useState } from 'react';
import {
	Pressable,
	StyleSheet,
	Text,
	View,
	Modal as RNModal,
	Alert,
	useWindowDimensions,
} from 'react-native';
import PressableText from './PressableText';

interface ModalProps {
	activator?: React.FC<{ handleOpen: () => void }>;
}

const Modal: React.FC<ModalProps> = ({ activator: Activator }) => {
	const { height, width } = useWindowDimensions();
	const [modalVisible, setModalVisible] = useState<boolean>(false);
	return (
		<View>
			<RNModal
				animationType='slide'
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
					setModalVisible(!modalVisible);
				}}>
				<View style={styles.centeredView}>
					<View
						style={[
							styles.modalView,
							{ height: height * 0.7, width: width * 0.8 },
						]}>
						<Text style={styles.modalText}>Hello World!</Text>

						<Pressable
							style={[styles.button, styles.buttonClose]}
							onPress={() => setModalVisible(!modalVisible)}>
							<Text style={styles.textStyle}>Hide Modal</Text>
						</Pressable>
					</View>
				</View>
			</RNModal>
			{Activator ? (
				<Activator handleOpen={() => setModalVisible(!modalVisible)} />
			) : (
				<PressableText
					text='Cheeck'
					onPress={() => setModalVisible(!modalVisible)}
				/>
			)}
		</View>
	);
};

export default Modal;

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		// padding: 100,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#F194FF',
	},
	buttonClose: {
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
});
