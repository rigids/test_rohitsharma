import React, {Connect} from 'react';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import PresIn from '../../src/components/PresIn';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureStore();

const initialState = [];

describe('Items reducer', () => {
  let wrapper;
  beforeEach(() => {
    const store = mockStore(initialState);
    wrapper = mount(
        <Provider store={store}>
          <BrowserRouter>
            <PresIn />
          </BrowserRouter>
        </Provider>
      );
  });
  
  it('Render PresIn Component with button.', () => {
      expect(wrapper.find('.btn').length).toBe(1);
  });
  
  it('Snapshot render', () => {
    expect(toJson(wrapper.render())).toMatchSnapshot();
  });
    
});


