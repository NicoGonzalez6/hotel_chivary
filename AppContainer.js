import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Forgot from './src/screens/auth/forgotPassword/Forgot';
import Login from './src/screens/auth/login/Login';
import Register from './src/screens/auth/register/Register';

import HomeScreen from './src/screens/home/HomeScreen';

export const AppContainer = ({
	onLayoutRootView,
	isLogged,
	isFirstTimeRunningApp,
	userInfo,
}) => {
	const Stack = createNativeStackNavigator();

	if (!isFirstTimeRunningApp) {
		return (
			<Stack.Navigator
				initialRouteName={isLogged && userInfo ? 'home' : 'login'}
			>
				<Stack.Screen name='login' options={{ headerShown: false }}>
					{(props) => (
						<Login {...props} onLayout={onLayoutRootView} />
					)}
				</Stack.Screen>
				<Stack.Screen
					name='register'
					options={{ headerShown: false }}
					component={Register}
				/>
				<Stack.Screen
					name='forgot'
					options={{ headerShown: false }}
					component={Forgot}
				/>
				<Stack.Screen name='home' options={{ headerShown: false }}>
					{(props) => (
						<HomeScreen {...props} onLayout={onLayoutRootView} />
					)}
				</Stack.Screen>
			</Stack.Navigator>
		);
	}
};
