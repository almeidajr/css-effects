import { CSSProperties, FormEvent, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './GlassmorphismLoginForm.scss';

const squares: number[] = Array.from(Array(5).keys());

function GlassmorphismLoginForm(): JSX.Element {
  const history = useHistory();

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      history.push('/');
    },
    [history],
  );

  return (
    <main className="GlassmorphismLoginForm">
      <section>
        <div className="color" />
        <div className="color" />
        <div className="color" />

        <div className="box">
          {squares.map((value) => (
            <div
              className="square"
              key={value}
              style={{ '--delay': value } as CSSProperties}
            />
          ))}

          <div className="container">
            <form className="form" onSubmit={handleSubmit}>
              <h2>Welcome</h2>

              <div className="input-box">
                <input
                  autoComplete="current-username"
                  placeholder="Username"
                  type="text"
                />
              </div>

              <div className="input-box">
                <input
                  autoComplete="current-password"
                  placeholder="Password"
                  type="password"
                />
              </div>

              <div className="input-box">
                <input placeholder="Login" type="submit" />
              </div>

              <p className="account-tools">
                Forgot password? <Link to="/">Click here</Link>
              </p>

              <p className="account-tools">
                Don&apos;t have an account? <Link to="/">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GlassmorphismLoginForm;
