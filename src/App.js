import React from 'react';
import { Layout } from './components';
import { Home } from './pages';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
