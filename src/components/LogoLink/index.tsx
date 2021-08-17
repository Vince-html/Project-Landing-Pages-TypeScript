import { Container } from './style';
import React from 'react';
import { Heading } from '../Heading';
import Link from 'next/link';

export type LogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
  newTab?: boolean;
};
export const LogoLink = ({
  text,
  srcImg = '',
  link,
  newTab = false,
}: LogoLinkProps) => {
  const nextLink = link.match(/^\//) ? true : false;
  const target = newTab ? '_blank' : '_self';

  if (nextLink) {
    return (
      <>
        <Heading size="small" uppercase>
          <Link href={link} passHref>
            <Container target={target}>
              {srcImg ? <img src={srcImg} alt={text} /> : <span>{text}</span>}
            </Container>
          </Link>
        </Heading>
      </>
    );
  }
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
