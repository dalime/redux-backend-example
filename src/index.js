import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout';
import Splash from './components/Splash';
import PokemonPage from './components/PokemonPage';

import store from './store';

render(
   <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Splash}/>
        <Route path='/pokemon' component={PokemonPage}/>
      </Route>
    </Router>
   </Provider>,
  document.getElementById('root')
);
