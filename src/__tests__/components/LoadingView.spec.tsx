import { render } from '@testing-library/react';

import LoadingView from '../../containers/Nasa/components/LoadingView';

describe('LoadingView component', () => {
  it('should be able to render an loading view', () => {
    expect(render(<LoadingView />));
  });
});
