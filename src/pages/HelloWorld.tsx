import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import './HelloWorld.scss';

function HelloWorld(): JSX.Element {
  return (
    <main className="HelloWorld">
      <header className="HelloWorld-header">
        <Link to="/">
          <img alt="logo" className="HelloWorld-logo" src={logo} />
        </Link>
        <p>
          Edit <code>src/HelloWorld.tsx</code> and save to reload.
        </p>
        <a
          className="HelloWorld-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </main>
  );
}

export default HelloWorld;
