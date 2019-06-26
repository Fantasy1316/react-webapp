import * as constants from "./constants";

const tabChangeAction = (index, left) => ({
  type: constants.TAB_CHANGE,
  index,
  left
})

export const tabChange = (index, left) => {
  return (dispatch) => {
    dispatch(tabChangeAction(index, left));
  }
}