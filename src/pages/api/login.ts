import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Fake delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Fake valid user => Username: test@test.com / Password: test1234
    let resBody: { status: string; key?: string };
    let status: number;
    if (
      req.body.username === 'test@test.com' &&
      req.body.password === 'test1234'
    ) {
      resBody = {
        status: 'ok',
        key: '32m09FEC3f23fh3209fva23FFn2o',
      };
      status = 200;
    } else {
      resBody = {
        status: 'invalid credentials',
      };
      status = 401;
    }

    return res.status(status).json(resBody);
  } else {
    return res
      .status(405)
      .json({ status: `${req.method} method is not allowed` });
  }
}
