import P from 'prop-types';
import { Container } from './style';
import React from 'react';

export type MenuLinkProp = {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
};

export const MenuLink = ({ children, link, newTab = false }: MenuLinkProp) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Container href={link} target={target}>
      {children}
    </Container>
  );
};
