import React from 'react'
import { render } from 'react-testing-library'
import Navbar from '../components/Navbar'

it('renders without crashing', ()=> {
  const { getAllByText } = render(<Navbar/>)
  expect(getAllByText('/cartesian/i')).toBeInTheDOM()
})
