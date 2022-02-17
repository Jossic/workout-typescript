import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PlannerScreen from '../screens/PlannerScreen';

export default function Navigation() {
	return (
		<NavigationContainer>
			<RootNavigator />
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
	return (
		<Stack.Navigator initialRouteName='Root'>
			<Stack.Screen name='Root' component={TabNavigator} />
		</Stack.Navigator>
	);
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Home' component={HomeScreen} />
			<Tab.Screen name='Planner' component={PlannerScreen} />
		</Tab.Navigator>
	);
}
