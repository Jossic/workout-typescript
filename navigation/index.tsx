import {
	DarkTheme,
	DefaultTheme,
	NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import PlannerScreen from '../screens/PlannerScreen';
import WorkoutDetailScreen from '../screens/WorkoutDetailScreen';
import { ColorSchemeName } from 'react-native';

export default function Navigation({ theme }: { theme: ColorSchemeName }) {
	return (
		<NavigationContainer
			theme={theme === 'light' ? DefaultTheme : DarkTheme}>
			<RootNavigator />
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
	return (
		<Stack.Navigator initialRouteName='Root'>
			<Stack.Screen
				name='Root'
				component={TabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='WorkoutDetail'
				component={WorkoutDetailScreen}
				// options={{ headerShown: false }}
				options={{ title: 'Workout Details' }}
			/>
		</Stack.Navigator>
	);
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
	return (
		<Tab.Navigator
			initialRouteName='Home'
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName = 'home';

					if (route.name === 'Home') {
						iconName = focused ? 'home' : 'home-outline';
					} else if (route.name === 'Planner') {
						iconName = focused ? 'list' : 'list-outline';
					}

					return (
						<Ionicons name={iconName} size={size} color={color} />
					);
				},
				tabBarActiveTintColor: 'blue',
				tabBarInactiveTintColor: 'gray',
			})}>
			<Tab.Screen name='Home' component={HomeScreen} />
			<Tab.Screen
				name='Planner'
				component={PlannerScreen}
				options={{ unmountOnBlur: true }}
			/>
		</Tab.Navigator>
	);
}
