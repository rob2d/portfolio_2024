import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders Next 14 boilerplate', async () => {
    render(<Home />);
    expect(
      screen.getByText('Explore starter templates for Next.js.')
    ).toBeInTheDocument();
  });
});
