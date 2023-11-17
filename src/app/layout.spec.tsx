import { render, screen } from '@testing-library/react';
import Layout from './layout';

describe('Page Layout', () => {
  it('renders with name accessibly labeled', async () => {
    render(<Layout>hello-world</Layout>);
    expect(screen.getByLabelText('Robert Concepción III')).toBeInTheDocument();
  });
});
