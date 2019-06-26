import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultStore = fromJS({
  tabIndex: 1,
  lineLeft: 13.467
})

export default (store = defaultStore, action) => {
  switch(action.type) {
    case constants.TAB_CHANGE:
      return store.merge({
        tabIndex: action.index,
        lineLeft: action.left
      });
    default:
      return store;
  }
}