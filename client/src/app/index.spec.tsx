import { render, screen } from '@testing-library/react';

import App from './index';

describe('Component <App />:', () => {
  test('=> has title', () => {
    render(<App />);
    const titleEl = screen.getByText('Testiroom');
    expect(titleEl).toBeInTheDocument();
  });
});
