import { render, screen } from '@testing-library/react';
import App from '../src/components/App/App';

test('renders GitHub User Search header', () => {
  render(<App />);
  const headerElement = screen.getByText(/GitHub User Search/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders search input and button', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter GitHub username/i);
  const buttonElement = screen.getByText(/Search/i);
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('renders sorting select element', () => {
  render(<App />);
  const selectElement = screen.getByLabelText(/Sort by repositories/i);
  expect(selectElement).toBeInTheDocument();
});
