export async function Fetch(queryType: string): Promise<any> {
  const endpoint = 'https://thebiem.com/graphql';

  const response = await fetch(endpoint, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: queryType,
    }),
  });

  const results = await response.json();

  return results.data;
}
