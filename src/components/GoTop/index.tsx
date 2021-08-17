import { Container } from './style';
import React from 'react';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = () => {
  return (
    <Container href="#" aria-label="Go to top" title="Home">
      <KeyboardArrowUp />
    </Container>
  );
};
