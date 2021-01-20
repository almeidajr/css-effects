import { Route, Switch } from 'react-router-dom';

import GlassmorphismCard from './pages/GlassmorphismCard';
import GlassmorphismLoginForm from './pages/GlassmorphismLoginForm';
import HelloWorld from './pages/HelloWorld';
import Home from './pages/Home';
import StackedCards from './pages/StackedCards';

function Routes(): JSX.Element {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={HelloWorld} path="/hello-world" />
      <Route component={GlassmorphismCard} path="/glassmorphism-card" />
      <Route component={StackedCards} path="/stacked-cards" />
      <Route
        component={GlassmorphismLoginForm}
        path="/glassmorphism-login-form"
      />
    </Switch>
  );
}

export default Routes;
