import { Container } from './style';
import React from 'react';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Container>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </Container>
  );
};
