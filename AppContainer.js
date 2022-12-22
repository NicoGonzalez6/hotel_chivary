import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Forgot from './src/screens/auth/forgotPassword/Forgot';
import Login from './src/screens/auth/login/Login';
import Register from './src/screens/auth/register/Register';
import HomeScreen from './src/screens/home/HomeScreen';
import Header from './src/containers/header/Header';
import InternetAcces from './src/screens/internetAccess/InternetAcces';
import { colors } from './src/theme/colors';
import { fontTypes } from './src/theme/fonts';
import { View } from 'react-native';
import SimpleHeader from './src/containers/simpleHeader/SimpleHeader';

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
				screenOptions={{
					title: 'Acceso a internet',
					headerStyle: {
						backgroundColor: colors.primary,
						hieght: 150,
					},
					headerTintColor: colors.white,
					headerTitleStyle: {
						fontFamily: fontTypes.montserrat_bold,
					},
				}}
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
				<Stack.Screen
					name='home'
					options={{
						header: (props) => (
							<Header userInfo={userInfo} {...props} />
						),
					}}
				>
					{(props) => (
						<HomeScreen {...props} onLayout={onLayoutRootView} />
					)}
				</Stack.Screen>
				<Stack.Screen
					name='internet'
					options={{
						header: (props) => (
							<SimpleHeader
								title='Acceso a internet'
								{...props}
							/>
						),
					}}
				>
					{(props) => <InternetAcces {...props} />}
				</Stack.Screen>
			</Stack.Navigator>
		);
	}
};
