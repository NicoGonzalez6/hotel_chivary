import styled from 'styled-components';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

const Layout = ({ children, onLayout, withHeader }) => {
	return (
		<StyledContainer withHeader={withHeader} onLayout={onLayout}>
			{children}
		</StyledContainer>
	);
};

export default Layout;

const StyledContainer = styled.View`
	flex: 1;
	background-color: ${colors.white};
	position: relative;
	overflow: hidden;
	padding: ${({ withHeader }) => {
		return withHeader
			? `${spacing.container.layoutHeader}`
			: `${spacing.container.layout}`;
	}};
`;
