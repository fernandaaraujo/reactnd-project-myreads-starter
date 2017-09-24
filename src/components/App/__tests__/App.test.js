import React from 'react';
import { shallow, mount } from 'enzyme';
import localStorage from 'mock-local-storage';

import App from '../App';

global.window = {};
window.localStorage = global.localStorage;

describe('test app sections renders', () => {
  it('should render components per route', () => {
    const app = shallow(<App />);
    expect(app.find('Route').at(0).props().path).toBe('/');
    expect(app.find('Route').at(1).props().path).toBe('/search');
  });
});
