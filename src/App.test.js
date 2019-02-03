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

 // Symuluję wysłanie formularza po tym, jak wypełnię formularz powyżej
  afterEach(() => {
    form.simulate('submit');
  });

  test('check input username', () => {
    expect(wrapper.state().username).toEqual(testValue);
    expect(wrapper.state().email).toEqual(testEmail);
    expect(wrapper.state().password).toEqual(testValue);
    expect(wrapper.state().accept).toEqual(true);
  });

  test('check input email', () => {
    expect(wrapper.state().email).toEqual(testEmail);
  });

  test('check input password', () => {
    expect(wrapper.state().password).toEqual(testValue);
  });

  test('check input checkbox', () => {
    expect(wrapper.state().accept).toEqual(true);
  });

  // Validacja - sprawdzam, czy po wysłaniu formularza wartość w stanie została zmieniona = spełniłem warunki
  test('check form validation', () => {
    expect(wrapper.state().formSent).toEqual(true);
  });
});