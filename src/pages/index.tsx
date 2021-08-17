import Home from './../templates/Home/index';
import { loadPages } from '../api/load-pages';
import { GetStaticProps } from 'next';

export type IndexProps = {
  data: [];
};

export default function Index({ data = null }: IndexProps) {
  return <Home data={data} />;
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  let data;
  try {
    data = await loadPages('landing-pages');
  } catch (e) {
    //
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
};
