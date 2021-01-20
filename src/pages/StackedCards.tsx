import { Link } from 'react-router-dom';

import avatarImg from '../assets/avatar-87189421_p0.png';
import './StackedCards.scss';

const cards = Array.from({ length: 10 }, (_, i) => i + 1);

function StackedCards(): JSX.Element {
  return (
    <main className="StackedCards">
      <section className="card-list">
        {cards.map((value) => (
          <article className="card" key={value}>
            <header className="card-header">
              <p>Jan 20th 2021</p>
              <h2>Card {value}</h2>
            </header>

            <div className="card-author">
              <Link className="author-avatar" to="/">
                <img alt="Author avatar" src={avatarImg} />
              </Link>

              <svg className="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4" />
              </svg>

              <div className="author-name">
                <div className="author-name-prefix">Author</div>
                Alice Mononobe
              </div>
            </div>

            <div className="tags">
              <Link to="/">html</Link>
              <Link to="/">css</Link>
              <Link to="/">js</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default StackedCards;
