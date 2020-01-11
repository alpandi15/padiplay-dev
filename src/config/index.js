import dotenv from 'dotenv'

dotenv.config()

export const config = {
  env: process.env.NODE_ENV,
  apiProtocol: process.env.REACT_APP_API_PROTOCOL || 'http',
  apiHost: process.env.REACT_APP_API_HOST || 'localhost',
  apiPort: process.env.REACT_APP_API_PORT || '',
  apiVersion: process.env.REACT_APP_API_VERSION || '',
  appIdGoogle: process.env.REACT_APP_ID_GOOGLE || '',
  appIdFacebook: process.env.REACT_APP_ID_FACEBOOK || ''
}
