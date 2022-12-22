import styled from 'styled-components';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

const Layout = ({ children, onLayout, withHeader, backgroundVariation }) => {
	return (
		<StyledContainer
			withHeader={withHeader}
			onLayout={onLayout}
			backgroundVariation={backgroundVariation}
		>
			{children}
		</StyledContainer>
	);
};

export default Layout;

const StyledContainer = styled.View`
	flex: 1;
	background-color: ${({ backgroundVariation }) => {
		return backgroundVariation
			? `${colors.backgroundWhite}`
			: `${colors.white}`;
	}};
	position: relative;
	overflow: hidden;
	padding: ${({ withHeader }) => {
		return withHeader
			? `${spacing.container.layoutHeader}`
			: `${spacing.container.layout}`;
	}};
`;
