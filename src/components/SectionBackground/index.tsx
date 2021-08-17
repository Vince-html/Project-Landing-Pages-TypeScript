import { Container } from './style';
import React from 'react';
import { SectionContainer } from '../SectionContainer';

export type SectionBackgroundProps = {
  children: React.ReactNode;
  background?: boolean;
  sectionId?: string;
};

export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}: SectionBackgroundProps) => {
  return (
    <Container background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
};
