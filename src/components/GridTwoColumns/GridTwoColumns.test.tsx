import { GridTwoColumns } from '.';
import { renderTheme } from './../../styles/renderTheme';
import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
