import { ReactNode, useEffect, useRef } from 'react';

import VanillaTilt from 'vanilla-tilt';

interface TiltProps {
  className: string;
  children: ReactNode;
}

function Tilt({ className, children }: TiltProps): JSX.Element {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current as HTMLElement, {
      max: 25,
      speed: 400,
      glare: true,
    });
  }, []);

  return (
    <div className={className} ref={tiltRef}>
      {children}
    </div>
  );
}

export default Tilt;
