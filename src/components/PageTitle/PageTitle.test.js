import React from 'react';
import { render } from '@testing-library/react';
import PageTitle from './PageTitle';

const label = 'Github user details';

describe('<PageTitle />', function () {
  it('should match the snapshot', () => {

    const { container: { firstChild } }  = render(
      <PageTitle label={label} />
    );

    expect(firstChild).toMatchSnapshot();

    /**
     * Write a snapshot test for PageTitle component
     * Don't forget to add snapshot file to the git
     */
  });
});
