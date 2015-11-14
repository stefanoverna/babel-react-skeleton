import React from 'react';
import expect from 'expect'
import { shallow } from 'enzyme';
import { App } from '../../js/components/App';

describe('<App />', () => {
  it('should render "Loading" if booted is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toBe('Loading...');
  });

  it('should render "Booted" if booted is true', () => {
    const wrapper = shallow(<App booted={ true }/>);
    expect(wrapper.text()).toBe('Booted!');
  });
});

