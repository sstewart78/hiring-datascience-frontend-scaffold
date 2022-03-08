import { render } from '@testing-library/react';

import Subheading from './subheading';

describe('Subheading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Subheading />);
    expect(baseElement).toBeTruthy();
  });
});
