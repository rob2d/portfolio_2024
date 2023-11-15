import { render, screen } from '@testing-library/react';
import HeaderSectionNavButtons from './HeaderSectionNavButtons';
import { Sections } from '../constants/Sections';

describe('HeaderSectionNavButtons', () => {
  it('renders expected section buttons', async () => {
    render(<HeaderSectionNavButtons />);
    Sections.forEach((s) => {
      expect(screen.getByText(s.name)).toBeInTheDocument();
    });
  });
});
