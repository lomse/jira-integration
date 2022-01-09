import fetch from 'cross-fetch'

const getCloudId = async (accessToken: string) => {
   const rawResponse = await fetch('https://api.atlassian.com/oauth/token/accessible-resources', {
      method: 'GET',
      headers: {
         'Accept': 'application/json',
         'Authorization': `Bearer ${accessToken}`,
      }
   });

   const response = await rawResponse.json();

   return response[0].id;
};

export default getCloudId;