import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';

import GlobalStyle from './styles/global';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
}

export default App;
