import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import WebFont from 'webfontloader';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducer from './reducers';
import rootSaga from './sagas';
import TrainTimes from './components/traintimes';

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
      'Patua One'
    ]
  }
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <div>
      <Route path="/" component={TrainTimes} exact />
    </div>
  </BrowserRouter>
</Provider>, document.getElementById('index')); //eslint-disable-line