import { screen } from '@testing-library/react';
import { SectionContainer } from '.';
import { renderTheme } from './../../styles/renderTheme';

describe('<SectionContainer/>', () => {
  it('should render content', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
