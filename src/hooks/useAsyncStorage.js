import AsyncStorage from '@react-native-async-storage/async-storage';
import { asyncTypes } from '../constants/types/asyncTypes';

//save in Async store data
const storeData = async (value, keyName) => {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem(keyName, jsonValue);
	} catch (e) {
		console.log(e);
	}
};

//Get Async store data
const getData = async (keyName) => {
	let dataValue = undefined;
	try {
		const value = await AsyncStorage.getItem(keyName);

		if (value !== null) {
			return (dataValue = JSON.parse(value));
		}
	} catch (e) {
		console.log(e);
	}
};

//Remove Async store data
const removeData = async (keyName) => {
	try {
		await AsyncStorage.removeItem(keyName);
	} catch (e) {
		console.log(e);
	}
};

export const useAsyncStorage = (type, data, keyName) => {
	if (type == asyncTypes.save) {
		return storeData(data, keyName);
	} else if (type == asyncTypes.get) {
		return getData(keyName);
	} else if (type == asyncTypes.remove) {
		return removeData(keyName);
	}
};
