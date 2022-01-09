'use strict'

import Joi from '@hapi/joi'

const schema = Joi.object({
   JIRA_CALLBACK_URL: Joi.string().required().uri({
      scheme: ['https']
   }),
   JIRA_CLIENT_ID: Joi.string().required(),
   JIRA_SECRET: Joi.string().required(),
   JIRA_SCOPES: Joi.string().required(),
})

const variables = {
   JIRA_CALLBACK_URL: process.env.JIRA_CALLBACK_URL,
   JIRA_CLIENT_ID: process.env.JIRA_CLIENT_ID,
   JIRA_SECRET: process.env.JIRA_SECRET,
   JIRA_SCOPES: process.env.JIRA_SCOPES,
}

const { error, value } = schema.validate(variables)

if (error) {
   throw new Error(`Config validation error: ${error.message}`)
}

export default value