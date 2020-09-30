import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultStore = fromJS({
  tabIndex: 1,
  lineLeft: 13.467,
  hotList: [],
  attentionList: []
})

export default (store = defaultStore, action) => {
  switch (action.type) {
    case constants.TAB_CHANGE:
      return store.merge({
        tabIndex: action.index,
        lineLeft: action.left
      })
    case constants.GET_ATTENTION_DATA:
      return store.set('attentionList', fromJS(action.list))
    case constants.GET_HOT_DATA:
      return store.set('hotList', fromJS(action.list))
    default:
      return store
  }
}
