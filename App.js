import { loadFonts } from './src/utils/helpers';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/stores/store';
import { useState, useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { AppContainer } from './AppContainer';
import { useAsyncStorage } from './src/hooks/useAsyncStorage';
import { asyncTypes } from './src/constants/types/asyncTypes';
import { getUserInfo } from './src/services';
import { deleteUser } from './src/stores/sessionReducer/store';
import { loginUser } from './src/stores/sessionReducer/store';

export default function App() {
	//Main App
	return (
		<NavigationContainer>
			<Provider store={store}>
				<AppController />
			</Provider>
		</NavigationContainer>
	);
}

const AppController = () => {
	const [appIsReady, setAppIsReady] = useState(false);

	const Dispatch = useDispatch();

	const { isFirstTimeRunningApp, isLogged, user } = useSelector(
		(state) => state.sessionReducer
	);

	async function prepare() {
		// Keep the splash screen visible
		await SplashScreen.preventAutoHideAsync();
		// Do what you need before the splash screen gets hidden
		await loadFonts();

		let userInfo = undefined;
		let tokenInfo = undefined;

		await useAsyncStorage(asyncTypes.get, '', 'user').then((user) => {
			if (user) {
				userInfo = user;
			}
		});

		await useAsyncStorage(asyncTypes.get, '', 'tokens').then((tokens) => {
			if (tokens) {
				tokenInfo = tokens;
			}
		});

		if (userInfo) {
			await getUserInfo(userInfo.id, tokenInfo.idToken)
				.then((user) => {
					Dispatch(loginUser(user));
				})
				.catch((err) => {
					useAsyncStorage(asyncTypes.remove, '', 'user');
					useAsyncStorage(asyncTypes.remove, '', 'tokens');
				});

			// Then tell the application to render
			return setAppIsReady(true);
		}

		if (!userInfo) {
			await Dispatch(deleteUser());
			await useAsyncStorage(asyncTypes.remove, '', 'tokens');
			await useAsyncStorage(asyncTypes.remove, '', 'user');
			// Then tell the application to render
			return setAppIsReady(true);
		}
	}

	// To handle the fonts load
	useEffect(() => {
		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			// Hide the splash screen
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	return (
		<AppContainer
			onLayoutRootView={onLayoutRootView}
			isFirstTimeRunningApp={isFirstTimeRunningApp}
			isLogged={isLogged}
			userInfo={user}
		/>
	);
};
