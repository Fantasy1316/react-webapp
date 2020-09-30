import * as constants from './constants'

const navBarAction = (index) => ({
  type: constants.CHANGE_NAV_BAR,
  tab: index
})

const navShowAction = (show) => ({
  type: constants.CHANGE_NAV_SHOW,
  show
})

export const changeNavBar = (index) => {
  return (dispatch) => {
    dispatch(navBarAction(index))
  }
}

export const changeNavBarShow = (show) => {
  return (dispatch) => {
    dispatch(navShowAction(show))
  }
}
