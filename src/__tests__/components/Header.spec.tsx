import { render } from '@testing-library/react';

import Header from '../../components/Header';

describe('Header component', () => {
  it('should be able to render an header', () => {
    expect(render(<Header />));
  });
});
