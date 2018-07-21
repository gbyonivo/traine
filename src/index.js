import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import WebFont from 'webfontloader';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reducer from './reducers';
import rootSaga from './sagas';
import Routes from './routes';

import './index.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer(),
  window.___INITIAL_STATE__, //eslint-disable-line
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f //eslint-disable-line
  )
);

WebFont.load({
  google: {
    families: [
      'Patua One',
      'Fira Sans'
    ]
  }
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}>
  <Routes/>
</Provider>, document.getElementById('index')); //eslint-disable-line