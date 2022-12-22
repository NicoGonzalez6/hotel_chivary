import React from 'react';
import { textTypes } from '../../../constants/types/textTypes';
import Text from '../../atoms/Text/Text';
import Input from '../../atoms/Input/Input';
import styled from 'styled-components';
import { spacing } from '../../../theme/spacing';

const LabelBox = ({ value }) => {
	return (
		<StyledContainer>
			<Text textTypes={textTypes.link}>{value.label}</Text>
			<Input
				textAlign={'center'}
				boldValue={true}
				value={value.value}
			></Input>
		</StyledContainer>
	);
};

export default LabelBox;

const StyledContainer = styled.View`
	min-height: 70px;
	margin-bottom: ${spacing.medium};
	justify-content: space-between;
`;
