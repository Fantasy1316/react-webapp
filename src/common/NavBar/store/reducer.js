import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultStore = fromJS({
  currentTab: 1,
  tabShow: true
})

export default (store = defaultStore, action) => {
  switch (action.type) {
    case constants.CHANGE_NAV_BAR:
      return store.set('currentTab', action.tab)
    case constants.CHANGE_NAV_SHOW:
      return store.set('tabShow', action.show)
    default:
      return store
  }
}
