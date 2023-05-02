import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders App component', () => {
  render(<App />)
  expect(screen.getByTestId('main-component')).toBeInTheDocument()
})