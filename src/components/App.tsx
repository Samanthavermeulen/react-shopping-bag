import * as React from "react";
import * as ReactDOM from "react-dom";
import Container from "./Container"
import {createStore} from 'redux';
import allReducers from '../reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from "react-redux";
// TODO make props into redux
// https://www.youtube.com/watch?v=CVpUuw9XSjY&t=1754s
// TODO make redux into typescript
// https://www.youtube.com/watch?v=udr2rx_B99w&t=2229s
// TODO look into more about typescript in React
// https://www.youtube.com/watch?v=Z5iWr6Srsj8

const store = createStore(allReducers, composeWithDevTools());
ReactDOM.render(
  <div>
    <>
      <Provider store={store}>
        <Container />
      </Provider>
    </>
  </div>, 
  document.getElementById("root")
  );
