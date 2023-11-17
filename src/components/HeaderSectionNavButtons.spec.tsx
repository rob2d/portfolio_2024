import { render, screen } from '@testing-library/react';
import HeaderSectionNavButtons from './HeaderSectionNavButtons';
import { orderedSections } from '../app/constants/Sections';

describe('HeaderSectionNavButtons', () => {
  it('renders expected section buttons', async () => {
    render(<HeaderSectionNavButtons />);
    orderedSections.forEach((s) => {
      expect(screen.getByText(s.name)).toBeInTheDocument();
    });
  });
});
