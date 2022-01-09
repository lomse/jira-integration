'use strict'

import Joi from '@hapi/joi'

const validEnvs = ['development', 'stage', 'production', 'test']

const schema = Joi.object({
   NODE_ENV: Joi.string()
      .required()
      .valid(...validEnvs)
      .default('development'),
   PORT: Joi.number()
      .required()
      .min(1)
      .max(65535)
})

const variables = {
   NODE_ENV: process.env.NODE_ENV,
   PORT: +process.env.PORT!,
}

const { error, value } = schema.validate(variables)

if (error) {
   throw new Error(`Config validation error: ${error.message}`)
}

export default value