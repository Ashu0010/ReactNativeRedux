import React from 'react'
import { Provider } from 'react-redux'
import store from './src/Store/store'
import Navigatn from './src/Navigation/Index'

const App = () => {
  return (
    <Provider store={store}>
      <Navigatn/>
    </Provider>
  );
};

export default App;
