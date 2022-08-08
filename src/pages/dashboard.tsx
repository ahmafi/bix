import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { getLoginToken } from 'features/auth/lib/storage';

const Dashboard: NextPage = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = getLoginToken();
    if (!token.success) {
      router.push('/login');
      return;
    }

    setLoggedIn(true);
  }, [router]);

  if (!loggedIn) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
      </Head>

      <main>dashboard</main>
    </div>
  );
};

export default Dashboard;
