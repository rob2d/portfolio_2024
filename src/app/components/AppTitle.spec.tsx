import { render } from '@testing-library/react';
import AppTitle, { APP_NAME } from './AppTitle';

describe('AppTitle', () => {
  it('should set the window title properly', () => {
    render(<AppTitle />);
    expect(globalThis?.document.title).toBe(`About | ${APP_NAME}`);
  });
});
