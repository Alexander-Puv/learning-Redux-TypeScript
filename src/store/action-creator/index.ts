import * as UserActionCreators from './User'
import * as TodoActionCreators from './Todo'

export default {
    ...UserActionCreators,
    ...TodoActionCreators
}