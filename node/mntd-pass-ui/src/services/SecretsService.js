import axios from 'axios'
import { API_ROUTES } from '../constant/apiRoutes.js'
import SecretsTransformer from '@/transformers/Secrets'

class SecretService {
  async getSecrets(username, token) {
    let res = await axios.get(`${API_ROUTES.SECRETS}/${username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    res.data.data = SecretsTransformer.fetchCollection(res.data.data)
    return res
  }

  async getValueSecret(username, name, token) {
    let res = await axios.get(`${API_ROUTES.GET_SECRET}/${username}/${name}`, {
      headers: { Authorization: `Bearer ${token}` }
    })

    return res
  }
}

export default new SecretService()
