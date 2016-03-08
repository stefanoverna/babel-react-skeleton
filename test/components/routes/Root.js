import React from 'react';
import expect from 'expect'
import { shallow } from 'enzyme';
import { Root } from '../../../js/components/routes/Root';
import { FormattedMessage } from 'react-intl';

describe('<Root />', () => {
  it('should render "Booted"', () => {
    const wrapper = shallow(<Root booted={ true }/>);
    expect(wrapper.find(FormattedMessage).props().id).toBe('app.root.booted');
  });
});

