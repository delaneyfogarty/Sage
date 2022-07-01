/* Great work on this! Such a wonderful idea for a project and a fun chance to work on an badly-documented and buggy API. Most APIs you'll deal with in your career will feel a lot like this, since most APIs are internal to your company, so this was great practice for development in the real world. Your components are sensibly broken into smaller parts, and this project would be a delight to maintain. Keep up these good habits! */

// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { logout, getUser } from './services/supabase';
// import { convertText } from './services/fetch-utils';
import AuthPage from './AuthPage';
import ProfilePage from './ProfilePage';
import Home from './Home';
import DetailPage from './DetailPage';
import AboutUs from './AboutUs';
import Library from './Library';

function App() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const user = getUser();

    if (user) {
      setToken(user.access_token);
      setEmail(user.email);
    }
  }, []);

  async function handleLogout() {
    await logout();
    setEmail('');
    setToken('');
  }

  return (
    <>
      <Router>
        <header>
          <nav>
            <ul className="links">
              <li className="navlink">
                <Link to="/home">Home</Link>
              </li>
              <li className="navlink">
                <Link to="/library">Library</Link>
              </li>
              <li className="navlink">
                <Link to="/profile">Instructions</Link>
              </li>
              <li className="navlink">
                <Link to="/about">About Us</Link>
              </li>
              <li className="navlink">
                <p>{email}</p>
                {/* <p>{token}</p> */}
                <button className="button-55" role="button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              {token ? (
                <Redirect to="/profile" />
              ) : (
                <AuthPage setEmail={setEmail} setToken={setToken} />
              )}
            </Route>
            <Route exact path="/profile">
              {token ? <ProfilePage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/library">
              {token ? <Library /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/detail/:id">
              {token ? <DetailPage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/about">
              {token ? <AboutUs /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/home">
              {token ? <Home /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </header>
      </Router>
    </>
  );
}

export default App;
