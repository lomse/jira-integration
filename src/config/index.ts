
'use strict'

import components from './components'

const config = (env: any) => {
   if (!components[env]) {
      throw new Error(`${env} is not defined`)
   }
   return components[env]
}

export default config