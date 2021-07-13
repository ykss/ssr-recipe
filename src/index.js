import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import rootReducer from "./modules";
// import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// serviceWorker.unregister();
