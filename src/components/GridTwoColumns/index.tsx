import { Container, TextContainer, ImgContainer, Image } from './style';
import React from 'react';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from './../TextComponent/index';

export type GridTwoColumnsProps = {
  title: string;
  text: string;
  background?: boolean;
  srcImg: string;
  sectionId?: string;
};

export const GridTwoColumns = ({
  title,
  text,
  background = false,
  srcImg,
  sectionId = '',
}: GridTwoColumnsProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container>
        <TextContainer>
          <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </TextContainer>
        <ImgContainer>
          <Image src={srcImg} alt={title}></Image>
        </ImgContainer>
      </Container>
    </SectionBackground>
  );
};
