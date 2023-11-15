import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders with name accessibly labeled', async () => {
    render(<Home />);
    expect(screen.getByLabelText('Robert Concepción III')).toBeInTheDocument();
  });
});
