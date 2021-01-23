import { useCallback, WheelEvent } from 'react';
import { Link } from 'react-router-dom';

import image_1 from '../assets/82656475_p0.png';
import image_2 from '../assets/83255357_p0.png';
import image_3 from '../assets/84472246_p0.png';
import './ImageCarousel.scss';

function ImageCarousel(): JSX.Element {
  const handleWheel = useCallback((event: WheelEvent<HTMLDivElement>) => {
    event.currentTarget.scrollBy(event.deltaY, 0);
  }, []);

  return (
    <main className="ImageCarousel">
      <div className="items" onWheel={handleWheel}>
        <Link className="item" to="/">
          <img alt="82656475_p0" src={image_1} />
        </Link>
        <Link className="item" to="/">
          <img alt="83255357_p0" src={image_2} />
        </Link>
        <Link className="item" to="/">
          <img alt="84472246_p0" src={image_3} />
        </Link>
      </div>
      <div className="background" />
    </main>
  );
}

export default ImageCarousel;
