import { Router } from 'express';
import config from '../config';
import getAccessToken from '../services/getAccessToken';
import getCloudId from '../services/getCloudId';

const router = Router();
const scopes = config('JIRA_SCOPES');
const clientId = config('JIRA_CLIENT_ID');
const jiraCallback = config('JIRA_CALLBACK_URL');

router.get('/auth', (_, res) => {
   const authorizationUrl = `https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=${clientId}&scope=${scopes}&redirect_uri=${jiraCallback}&response_type=code&prompt=consent`;
   res.redirect(authorizationUrl);
});

router.get('/callback', async (req, res) => {
   const { code } = req.query;

   try {
      const accessToken = await getAccessToken(code as string);
      const cloudId = await getCloudId(accessToken);

      res
         .status(200)
         .json({
            cloudId,
            accessToken,
         })

   } catch (error) {
      res
         .status(500)
         .json(error)
   }
})

export default router;
