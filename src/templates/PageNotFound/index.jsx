import { GridContent } from '../../components/GridContent';

import React from 'react';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html='<p> A página que você busca não foi encontrada. <a href="/">Clique para voltar.</a></p>'
    />
  );
};
