import { Link } from 'react-router-dom';
import './Home.scss';

interface PageInfo {
  id: string;
  title: string;
  url: string;
}

const data: PageInfo[] = [
  {
    id: '6e3c41c3-e91f-4049-a194-e43c25b170ba',
    title: 'Image Carousel',
    url: '/image-carousel',
  },
  {
    id: '16fe8ce2-b676-484d-9290-e9da5835e249',
    title: 'Change Image on Hover',
    url: '/change-image-on-hover',
  },
  {
    id: '5dcc4543-0e90-4c6b-a666-581483e01b70',
    title: 'Shining Text',
    url: '/shining-text',
  },
  {
    id: 'abcea3bf-65c8-42a5-aa8f-194b08b9be05',
    title: 'Glassmorphism Login Form',
    url: '/glassmorphism-login-form',
  },
  {
    id: 'e2754300-f17d-49d5-998d-d24c058b9e4c',
    title: 'Stacked Cards',
    url: '/stacked-cards',
  },
  {
    id: '9d0feb04-c2f1-4d10-b3f3-25524656501c',
    title: 'Glassmorphism Card',
    url: '/glassmorphism-card',
  },
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
          {data.map(({ id, title, url }) => (
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
