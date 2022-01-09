import fetch from 'cross-fetch'
import config from "../config";

const secretId = config('JIRA_SECRET');
const clientId = config('JIRA_CLIENT_ID');
const jiraCallback = config('JIRA_CALLBACK_URL');

const getAccessToken = async (code: string) => {
   const rawResponse = await fetch('https://auth.atlassian.com/oauth/token', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         code,
         grant_type: 'authorization_code',
         client_id: clientId,
         client_secret: secretId,
         redirect_uri: jiraCallback
      })
   });

   const content = await rawResponse.json();

   return content.access_token;
};

export default getAccessToken;