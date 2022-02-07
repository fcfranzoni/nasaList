import { render } from '@testing-library/react';

import Footer from '../../components/Footer';

describe('Footer component', () => {
  it('should be able to render an footer', () => {
    expect(render(<Footer />));
  });
});
