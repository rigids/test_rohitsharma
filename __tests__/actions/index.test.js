import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../../src/components/App';

// describe what we are testing
describe('Render App Component', () => {
 
 // make our assertion and what we expect to happen 
 it('Should render without throwing an error', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find('.app__wrapper').length).toEqual(1);
 })
})