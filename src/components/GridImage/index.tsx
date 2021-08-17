import { Container, Grid, GridElement, Image } from './style';
import React from 'react';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export type GridImageProp = {
  background?: boolean;
  title: string;
  description: string;
  grid?: GridImageElementProps[];
  sectionId?: string;
};

export type GridImageElementProps = {
  altText: string;
  srcImg: string;
};

export const GridImage = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridImageProp) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>

        <Grid>
          {grid.map((e) => (
            <GridElement key={e.srcImg}>
              <Image src={e.srcImg} alt={e.altText} />
            </GridElement>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
};
