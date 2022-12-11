import React from 'react';
import { Text, View } from 'react-native';
import Layout from '../../containers/layout/Layout';

const HomeScreen = ({ onLayout }) => {
	return (
		<Layout onLayout={onLayout}>
			<Text>HomeScree</Text>
		</Layout>
	);
};

export default HomeScreen;
