import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import  rootReducer from '../../src/reducers/';
import { addItem, ADD_ITEM } from '../../src/actions/';

import PresIn from '../../src/components/App';



describe('Items reducer', () => {
  
  it('Should return the Initial state without Crashing.', () => {
    expect(rootReducer(undefined, {})).toEqual({"item":[]});
  });

  
   it('Should handle ADD_ITEM Reducer', () => {
      const state = [];
      const item = {
        "stored_value": 'Test',
        "stored_selection": ['Two', 'Three']
      }
      const newState = addItem(item);
      const expectedState = 
      {
       "item": [{
          stored_value: 'Test',
          stored_selection: ['Two', 'Three']
        }]
      }
      expect( rootReducer( {},newState )).toEqual(expectedState);
    });
    
    
});


