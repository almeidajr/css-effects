import { Link } from 'react-router-dom';
import './Home.scss';

const data = [
  {
    id: 'b168ffc2-dbaf-4119-bb6f-2051c93e79a3',
    title: 'Hello World',
    url: '/hello-world',
  },
];

function Home(): JSX.Element {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1 className="Home-heading">
          <Link to="/">CSS Effects</Link>
        </h1>
      </header>
      <main>
        <ol>
          {data.reverse().map(({ id, title, url }) => (
            <li key={id}>
              <article className="Home-post-list-item">
                <header>
                  <h2>
                    <Link to={url}>{title}</Link>
                  </h2>
                </header>
              </article>
            </li>
          ))}
        </ol>
      </main>
      <footer>
        Copyright © <Link to="/">CSS Effects</Link> {new Date().getFullYear()}.
      </footer>
    </div>
  );
}

export default Home;
