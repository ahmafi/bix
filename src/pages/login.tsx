import { useState } from 'react';
import { NextPage } from 'next';

import { AuthMethod } from 'features/auth/ts/enums/auth-method';
import UserPass from 'features/auth/components/UserPass';

const Login: NextPage = () => {
  const [authMethod] = useState(AuthMethod.UserPass);
  let loginForm;

  if (authMethod === AuthMethod.UserPass) {
    loginForm = <UserPass />;
  }

  return (
    <div>
      <div>{loginForm}</div>
    </div>
  );
};

export default Login;
