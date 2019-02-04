import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('check render App and if form elements exist', () => {
  test('renders without crashing', () => {
    shallow(<App />);
  });

  test('does form include 4 inputs and button?', () => {
    const app = shallow(<App />);
    expect(app.find('input')).toHaveLength(4);
    expect(app.find('button')).toHaveLength(1);
  });
});

describe('check correct input values', () => {
  const wrapper = mount(<App />);
  const testValue = 'Texttexttext';
  const testEmail = 'random@email.com';
  const inputUsername = wrapper.find('input[name="username"]');
  const inputEmail = wrapper.find('input[name="email"]');
  const inputPassword = wrapper.find('input[name="password"]');
  const inputAccept = wrapper.find('input[name="accept"]');
  const form = wrapper.find('form');

  beforeEach(() => { 
    inputUsername.instance().value = testValue;
    inputUsername.simulate('change');

    inputEmail.instance().value = testEmail;
    inputEmail.simulate('change');

    inputPassword.instance().value = testValue;
    inputPassword.simulate('change');

    inputAccept.instance().checked= true;
    inputAccept.simulate('change');
 });

  // Simulate submit form after previous onChange simulations
  afterEach(() => {
    form.simulate('submit');
  });

  test('check input username - if onChange works in username input', () => {
    expect(wrapper.state().username).toEqual(testValue);
  });

  test('check input email  - if onChange works in email input', () => {
    expect(wrapper.state().email).toEqual(testEmail);
  });

  test('check input password - if onChange works in password input', () => {
    expect(wrapper.state().password).toEqual(testValue);
  });

  test('check input checkbox - if onChange works in checkbox input', () => {
    expect(wrapper.state().accept).toEqual(true);
  });

  // If form has been sent and validation in each input is correct - formSent property in state should be true
  test('check form validation', () => {
    expect(wrapper.state().formSent).toEqual(true);
  });
});