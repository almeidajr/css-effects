import Tilt from '../components/Tilt';
import './GlassmorphismCard.scss';

function GlassmorphismCard(): JSX.Element {
  return (
    <main className="GlassmorphismCard">
      <div className="container">
        <Tilt className="card">
          <div className="card-content">
            <h2>01</h2>
            <h3>Card</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              maiores neque at. At possimus saepe aliquid minima recusandae
              facilis quas repellat, voluptates impedit culpa magnam dicta
              commodi veniam hic accusantium!
            </p>
            <a href="/">Read more</a>
          </div>
        </Tilt>
        <Tilt className="card">
          <div className="card-content">
            <h2>02</h2>
            <h3>Card</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              maiores neque at. At possimus saepe aliquid minima recusandae
              facilis quas repellat, voluptates impedit culpa magnam dicta
              commodi veniam hic accusantium!
            </p>
            <a href="/">Read more</a>
          </div>
        </Tilt>
        <Tilt className="card">
          <div className="card-content">
            <h2>03</h2>
            <h3>Card</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              maiores neque at. At possimus saepe aliquid minima recusandae
              facilis quas repellat, voluptates impedit culpa magnam dicta
              commodi veniam hic accusantium!
            </p>
            <a href="/">Read more</a>
          </div>
        </Tilt>
      </div>
    </main>
  );
}

export default GlassmorphismCard;
