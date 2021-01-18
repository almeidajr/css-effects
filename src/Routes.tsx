import { Route, Switch } from 'react-router-dom';

import HelloWorld from './pages/HelloWorld';
import Home from './pages/Home';

function Routes(): JSX.Element {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={HelloWorld} path="/hello-world" />
    </Switch>
  );
}

export default Routes;
