import React from 'react';
import App from '../App';
import { shallow } from 'enzyme'
import './setup'

describe('App Component', () => {
  it('renders', ()=> {
    const wrapper = shallow(<App/>)
    // const brandState = wrapper.children
    console.log(wrapper)
    // expect(brandState).toEqual('Cart') 
  })
})