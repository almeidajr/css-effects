import { Link } from 'react-router-dom';

import Tilt from '../components/Tilt';
import './GlassmorphismCard.scss';

const cards = Array.from({ length: 9 }, (_, i) => i + 1);

function GlassmorphismCard(): JSX.Element {
  return (
    <main className="GlassmorphismCard">
      <div className="container">
        {cards.map((value) => (
          <Tilt className="card" key={value}>
            <div className="card-content">
              <h2>0{value}</h2>
              <h3>Card 0{value}</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit maiores neque at. At possimus saepe aliquid minima
                recusandae facilis quas repellat, voluptates impedit culpa
                magnam dicta commodi veniam hic accusantium!
              </p>
              <Link to="/">Read more</Link>
            </div>
          </Tilt>
        ))}
      </div>
    </main>
  );
}

export default GlassmorphismCard;
