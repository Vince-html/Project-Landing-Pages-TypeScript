import P from 'prop-types';
import { Container } from './style';
import React from 'react';
import { Heading } from '../Heading';

export type LogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
};

export const LogoLink = ({ text, srcImg = '', link }: LogoLinkProps) => {
  return (
    <>
      <Heading size="small" uppercase>
        <Container href={link}>
          {srcImg ? <img src={srcImg} alt={text} /> : <span>{text}</span>}
        </Container>
      </Heading>
    </>
  );
};
