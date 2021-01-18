import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
