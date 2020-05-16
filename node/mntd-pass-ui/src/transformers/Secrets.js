import moment from 'moment'
import { BaseTransformer } from './Base'
moment.locale('en')
export default class SecretsTransformer extends BaseTransformer {
  static fetch(secret) {
    console.log(secret)
    secret.createdAt = moment(secret.createdAt).fromNow()
    return secret
  }
}
