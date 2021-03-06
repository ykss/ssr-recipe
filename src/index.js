import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import rootReducer, { rootSaga } from "./modules";
// import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import createSagaMiddleware from "redux-saga";
import { loadableReady } from "@loadable/component";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, window.__PRELOADED_STATE__,applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(rootSaga);

const Root = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  )
}

const root = document.getElementById('root')

if (process.env.NODE_ENV === 'production') {
  loadableReady(() => {
    ReactDOM.hydrate(<Root />, root);
  });
} else {
  ReactDOM.render(<Root />, root);
}

// serviceWorker.unregister();
