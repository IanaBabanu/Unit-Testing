import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Email from './Email';

const email = 'john.doe@mail.com';

describe('<Email />', function () {
  it('should render show email button', () => {
    const { getByTestId, queryByText } = render(
      <Email value={email} />
    );

    const button = getByTestId('show-email-button');
    const emailValue = queryByText(email);

    expect(button).toHaveTextContent('show email');
    expect(emailValue).not.toBeInTheDocument();
    /**
     * Check if the right button is displayed
     * Ensure that email text in NOT displayed
     *
     * Useful links:
     * https://jestjs.io/docs/en/expect#not
     */

  });
  it('should render value when button clicked', () => {

    const { getByTestId, queryByText } = render(
      <Email value={email} />
    );

    const button = getByTestId('show-email-button');

    fireEvent.click(button);
    const emailValue = queryByText(email);

    expect(button).not.toBeInTheDocument();
    expect(emailValue).toBeInTheDocument();

    /**
     * After button was clicked
     * Check that button is NOT displayed (not exists in DOM)
     * Ensure that email text in displayed
     *
     * Useful links:
     * https://github.com/testing-library/jest-dom#tobeinthedocument
     */
  });
});

