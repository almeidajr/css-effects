import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import './ChangeImageOnHover.scss';

const columns = Array.from({ length: 4 }, (_, i) => i + 1);

function ChangeImageOnHover(): JSX.Element {
  const [activeColumn, setActiveColumn] = useState(1);

  const handleColumn = useCallback(
    (column: number) => setActiveColumn(column),
    [],
  );

  return (
    <main className="ChangeImageOnHover">
      {columns.map((column) => (
        <div
          className={clsx({
            column: true,
            active: activeColumn === column,
          })}
          key={column}
          onMouseEnter={() => handleColumn(column)}
        >
          <div className="content">
            <h1>{column}</h1>
            <div className="box">
              <h2>Card {column}</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit maiores neque at. At possimus saepe aliquid minima
                recusandae facilis quas repellat, voluptates impedit culpa
                magnam dicta commodi veniam hic accusantium!
              </p>
              <Link to="/">Read more</Link>
            </div>
          </div>
          <div className={`background image-${column}`} />
        </div>
      ))}
    </main>
  );
}

export default ChangeImageOnHover;
