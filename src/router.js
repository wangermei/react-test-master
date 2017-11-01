import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Test from './components/Test/Test';
import Index from './components/Index/Index';
import Greeting from './routes/Greeting';
import LoginButton from './routes/LoginButton';
import Logical from './routes/Logical';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/test" component={Test} />
        <Route path="/index" component={Index} />
        <Route path="/greeting" component={Greeting} />
        <Route path="/login" component={LoginButton} />
        <Route path="/logical" component={Logical} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
