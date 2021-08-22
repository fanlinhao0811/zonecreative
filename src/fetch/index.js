import { constructRequest } from './axios'

let api = {}

let RESTFullList = [
  'portfolio',
  'portfolio_new',
  'upload'
]

RESTFullList.forEach(item => {
  Object.assign(api, constructRequest(item));
});

export default api;