import axios from 'axios'
// import { fromJS } from "immutable";
import * as constants from './constants'

const tabChangeAction = (index, left) => ({
  type: constants.TAB_CHANGE,
  index,
  left
})

const getHotAction = (data) => ({
  type: constants.GET_HOT_DATA,
  list: data
})

const getAttentionAction = (data) => ({
  type: constants.GET_ATTENTION_DATA,
  list: data
})

export const tabChange = (index, left) => {
  return (dispatch) => {
    dispatch(tabChangeAction(index, left))
  }
}

export const getHotData = () => {
  return (dispatch) => {
    axios.get('/mock/hot.json').then((res) => {
      let data = res.data.data
      dispatch(getHotAction(data))
    })
  }
}

export const getAttentionData = () => {
  return (dispatch) => {
    axios.get('/mock/attention.json').then((res) => {
      let data = res.data.data
      dispatch(getAttentionAction(data))
    })
  }
}
