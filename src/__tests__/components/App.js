import React from 'react';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import App from '../../App';

const mockStore = configureStore();

it('renders app without crashing', () => {
  const store = mockStore({});
  const wrapper = render(<App store={store} />);
  expect(wrapper.find('.App').length).toBe(0);
});
