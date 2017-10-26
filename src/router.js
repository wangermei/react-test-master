import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Test from './components/Test/Test';
import Index from './components/Index/Index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/test" component={Test} />
        <Route path="/index" component={Index} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
