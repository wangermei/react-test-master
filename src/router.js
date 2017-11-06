import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Test from './components/Test/Test';
import Index from './components/Index/Index';
import Greeting from './routes/Greeting';
import LoginButton from './routes/LoginButton';
import Logical from './routes/Logical';
import ShowWarn from './routes/ShowWarn';
import Lists from './routes/Lists';
import Form from './routes/Form';
import FormLifeStateUp from './routes/FormLifeStateUp';
import Calculator from './routes/Calculator';
import Modal from './routes/Modal';
import Include from './routes/Include';

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
        <Route path="/warn" component={ShowWarn} />
        <Route path="/lists" component={Lists} />
        <Route path="/form" component={Form} />
        <Route path="/stateUp" component={FormLifeStateUp} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/modal" component={Modal} />
        <Route path="/include" component={Include} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
