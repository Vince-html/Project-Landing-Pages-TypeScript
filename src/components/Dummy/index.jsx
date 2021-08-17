import P from 'prop-types';
import { Container } from './style';
import React from 'react';

export const Dummy = ({ children }) => {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
};

Dummy.propTypes = {
  children: P.node.isRequired,
};
