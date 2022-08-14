import axios, { AxiosResponse } from 'axios';

async function Query(query: string): Promise<AxiosResponse<any, any>> {
  const endpoint = 'https://thebiem.com/graphql';

  const response = await axios({
    url: endpoint,
    method: 'post',
    data: {
      query: query,
    },
  });

  return response;
}

export default Query;
