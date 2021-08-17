import styled, { css } from 'styled-components';
import { Container as TextContainer } from '../TextComponent/style';
import { Container as SectionContainer } from '../SectionContainer/style';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};
    a {
      color: inherit;
      text-decoration: none;
    }
    & ${TextContainer} {
      font-size: ${theme.font.sizes.small};
    }
    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`;
