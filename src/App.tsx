import React from 'react';
import { Provider } from 'react-redux';
import Layout from './Layout';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout />
      </div>
    </Provider>
  )
}

export default App;
