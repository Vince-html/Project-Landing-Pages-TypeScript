import { Base } from '.';
import { renderTheme } from './../../styles/renderTheme';
import { mockBase } from './mock';

describe('<Base/>', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...mockBase} />);
    expect(container).toMatchSnapshot();
  });
});
