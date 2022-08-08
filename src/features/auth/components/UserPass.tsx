import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { login } from '../lib/api';
import { getLoginToken, setLoginToken } from '../lib/storage';

const UserPass = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    // Check if the user has already logged in (has a token in localStorage)
    const loginToken = getLoginToken();
    if (loginToken.success) {
      // TODO: Check with the server if the token is valid
      if (true) {
        router.push('/dashboard');
      }
    }
  }, [router]);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Try to login with username and password and save the token in localStorage

    const loginRes = await login({ username, password });
    if (!loginRes.success) {
      // Error using fetch
      return;
    }

    if (loginRes.value.status !== 'ok') {
      // Invalid login credentials
      return;
    }

    const setLoginTokenRes = setLoginToken(loginRes.value.key);
    if (!setLoginTokenRes.success) {
      // Error setting loginToken in localStorage
      return;
    }

    router.push('/dashboard');
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="email"
          name="username"
          id="username"
          autoComplete="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default UserPass;
