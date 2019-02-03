import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('check render App and if form elements exist', () => {
  test('renders without crashing', () => {
    shallow(<App />);
  });

  test('includes form', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('input')).toHaveLength(4);
    expect(wrapper.find('button')).toHaveLength(1);
  });
});

describe('check input values onChange', () => {
  const wrapper = mount(<App />);
  const testValue = 'Text';
  const inputUsername = wrapper.find('input[name="username"]');
  const inputEmail = wrapper.find('input[name="email"]');
  const inputPassword = wrapper.find('input[name="password"]');
  const inputAccept = wrapper.find('input[name="accept"]');

  beforeEach(() => { 
    inputUsername.instance().value = testValue;
    inputUsername.simulate('change');

    inputEmail.instance().value = testValue;
    inputEmail.simulate('change');

    inputPassword.instance().value = testValue;
    inputPassword.simulate('change');

    inputAccept.instance().checked= true;
    inputAccept.simulate('change');
    
  });

  test('check input username', () => {
    expect(wrapper.state().username).toEqual(testValue);
    expect(wrapper.state().email).toEqual(testValue);
    expect(wrapper.state().password).toEqual(testValue);
    expect(wrapper.state().accept).toEqual(true);
  });

  test('check input email', () => {
    expect(wrapper.state().email).toEqual(testValue);
  });

  test('check input password', () => {
    expect(wrapper.state().password).toEqual(testValue);
  });

  test('check input checkbox', () => {
    expect(wrapper.state().accept).toEqual(true);
  });
});