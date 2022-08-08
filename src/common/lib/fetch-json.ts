export default async function fetchJSON<T>(
  input: RequestInfo | URL,
  body: unknown,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const json = (await res.json()) as T;
  return json;
}
