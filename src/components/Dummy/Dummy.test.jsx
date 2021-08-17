import { screen } from '@testing-library/react';
import { Dummy } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<Dummy/>', () => {
  it('should render', () => {
    renderTheme(<Dummy>Children</Dummy>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
