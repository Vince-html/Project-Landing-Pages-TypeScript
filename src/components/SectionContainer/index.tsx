import { Container } from './style';
import React from 'react';
export type SectionContainerProps = {
  children: React.ReactNode;
};

export const SectionContainer = ({ children }: SectionContainerProps) => {
  return <Container>{children}</Container>;
};
