import { screen } from '@testing-library/react';
import { NavLink } from '.';
import { theme } from '../../styles/theme';
import { renderTheme } from './../../styles/renderTheme';
import mock from './mock';

describe('<NavLink/>', () => {
  it('should render links', () => {
    renderTheme(<NavLink links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });
  it('should not render links', () => {
    renderTheme(<NavLink />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });
  it('should render links', () => {
    renderTheme(<NavLink links={mock} />);
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column nowrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLink links={mock} />);
    expect(container).toMatchSnapshot();
  });
});
