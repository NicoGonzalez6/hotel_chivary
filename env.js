import Constants from 'expo-constants';

async function getEnvVars() {
	return Constants.manifest.extra;
}

export default getEnvVars;
