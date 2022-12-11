import styled from 'styled-components';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

const Layout = ({ children, onLayout }) => {
	return <StyledContainer onLayout={onLayout}>{children}</StyledContainer>;
};

export default Layout;

const StyledContainer = styled.View`
	flex: 1;
	background-color: ${colors.white};
	padding: ${spacing.container.layout};
`;
