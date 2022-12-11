import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import styled from 'styled-components';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

const KeyboardLayout = ({ children, onLayout }) => {
	return (
		<StyledKeyboardLayout
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			keyboardVerticalOffset={-0}
			onLayout={onLayout}
		>
			<ScrollView
				contentContainerStyle={{
					flex: 1,
				}}
			>
				{children}
			</ScrollView>
		</StyledKeyboardLayout>
	);
};

export default KeyboardLayout;

const StyledKeyboardLayout = styled.KeyboardAvoidingView`
	flex: 1;
	background-color: ${colors.white};
	padding: ${spacing.container.layout};
`;
