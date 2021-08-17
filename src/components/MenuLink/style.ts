import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    position: relative;

    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small};
    color: ${theme.colors.primaryColor};

    &::after {
      content: '';
      position: absolute;
      bottom: 0.7rem;
      left: 50%;
      width: 0;
      height: 0;
      background: ${theme.colors.secondaryColor};
      transition: all 200ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
      height: 0.2rem;
    }
  `}
`;
