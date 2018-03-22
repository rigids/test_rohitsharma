import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  rootReducer from './reducers';

import App from './components/App';
import ContIn from './components/ContIn';
import PresOut from './components/PresOut';

const store = createStore(rootReducer);
store.subscribe(()=>console.log(store.getState()));


ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/contin" component={ ContIn }></Route>
        <Route exact path="/contout" component={PresOut}/>
        <Route path="/contout/:page" component={PresOut}/>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
