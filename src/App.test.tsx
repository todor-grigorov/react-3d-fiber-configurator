import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders initial message', () => {
  render(<App />)
  expect(screen.getByText('ThreeJS test')).toBeInTheDocument()
})