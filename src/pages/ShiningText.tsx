import { Link } from 'react-router-dom';

import './ShiningText.scss';

function ShiningText(): JSX.Element {
  return (
    <main className="ShiningText">
      <Link className="text" to="/">
        Shining Text Animation
      </Link>
    </main>
  );
}

export default ShiningText;
