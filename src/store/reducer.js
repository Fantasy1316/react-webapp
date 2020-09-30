import { combineReducers } from 'redux-immutable'
import { reducer as navBarReducer } from '../common/NavBar/store'
import { reducer as homeReducer } from '../pages/home/store'

export default combineReducers({
  navBar: navBarReducer,
  home: homeReducer
})
