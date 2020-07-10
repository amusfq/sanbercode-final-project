import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import {GlobalProvider} from './Context/GlobalContext';

afterEach(cleanup);

test('Check About Page', () => {
  const {queryByText} = render(
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );

  const elm = queryByText(/Achmad Musyaffa/i);
  expect(elm).toMatchSnapshot('ACHMAD MUSYAFFA TAUFIQI')
});

test('Check Works Page', () => {
  const {queryAllByText} = render(
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
  
  const btn = queryAllByText(/Works/i)[0]
  fireEvent.click(btn)
  const elm = queryAllByText(/My Works/i)[0];
  expect(elm).toMatchSnapshot('My Works')
});

test('Check Repository Page', () => {
  const {queryAllByText} = render(
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
  
  const btn = queryAllByText(/repository/i)[0]
  fireEvent.click(btn)
  const elm = queryAllByText(/Repository/i)[0];
  expect(elm).toMatchSnapshot('Repository')
});

test('Check Contact Page', () => {
  const {queryAllByText} = render(
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
  
  const btn = queryAllByText(/contact/i)[0]
  fireEvent.click(btn)
  const elm = queryAllByText(/Contact Me/i)[0];
  expect(elm).toMatchSnapshot('Contact Me')
});

test('Change Theme', () => {
  const {container, queryAllByTitle} = render(
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
  
  const btn = queryAllByTitle(/Change theme/i)[0]
  fireEvent.click(btn)
  expect(container).toMatchSnapshot();
});
