import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { signUpUser, signInUser, getUser } from './services/supabase';

export default function AuthPage({ setEmail, setToken }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const [{ email: signInEmail, password: signInPassword }, setSignInFormData] = useState({
    email: '',
    password: '',
  });

  async function handleSignUpSubmit(e) {
    e.preventDefault();

    await signUpUser(signUpEmail, signUpPassword);

    const user = await getUser();
    setEmail(user.email);
    setToken(user.access_token);
  }

  async function handleSignInSubmit(e) {
    e.preventDefault();

    await signInUser(signInEmail, signInPassword);

    const user = await getUser();
    setEmail(user.email);
    setToken(user.access_token);
  }

  return (
    <div className="auth-page">
      <form onSubmit={handleSignUpSubmit}>
        <h4>Sign Up</h4>
        <label>
          email
          <input value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} />
        </label>
        <label>
          password
          <input value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} />
        </label>
        <button>Sign Up</button>
      </form>
      <form onSubmit={handleSignInSubmit}>
        <h4>Sign In</h4>
        <label>
          email
          <input
            value={signInEmail}
            onChange={(e) =>
              setSignInFormData({
                email: e.target.value,
                password: signInPassword,
              })
            }
          />
        </label>
        <label>
          password
          <input
            type="password"
            value={signInPassword}
            onChange={(e) =>
              setSignInFormData({
                email: signInEmail,
                password: e.target.value,
              })
            }
          />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
