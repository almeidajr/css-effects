import { Route, Switch } from 'react-router-dom';

import ChangeImageOnHover from './pages/ChangeImageOnHover';
import GlassmorphismCard from './pages/GlassmorphismCard';
import GlassmorphismLoginForm from './pages/GlassmorphismLoginForm';
import HelloWorld from './pages/HelloWorld';
import Home from './pages/Home';
import ShiningText from './pages/ShiningText';
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
      <Route component={ShiningText} path="/shining-text" />
      <Route component={ChangeImageOnHover} path="/change-image-on-hover" />
    </Switch>
  );
}

export default Routes;
