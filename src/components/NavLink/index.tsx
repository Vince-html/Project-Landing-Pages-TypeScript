import { Container } from './style';
import React from 'react';
import { MenuLink, MenuLinkProp } from '../MenuLink';

export type NavLinkProp = {
  links?: MenuLinkProp[];
};

export const NavLink = ({ links = [] }: NavLinkProp) => {
  return (
    <Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Container>
  );
};
