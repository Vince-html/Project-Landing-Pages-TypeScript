import { Container } from './style';
import React from 'react';

export type TextComponentProp = {
  children: string;
};

export const TextComponent = ({ children }: TextComponentProp) => {
  return <Container dangerouslySetInnerHTML={{ __html: children }} />;
};
