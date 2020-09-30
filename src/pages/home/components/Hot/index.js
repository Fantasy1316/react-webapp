import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../store'
import styles from './style.less'

class Hot extends Component {
  render() {
    const { hotList } = this.props
    return (
      <div className={styles.wrapper}>
        {hotList.map((item, index) => {
          return (
            <div className={styles.item} key={item.get('id')}>
              <div
                className={styles.itemSign}
                style={{ color: index > 2 ? '#ff9900' : '' }}
              >
                {item.get('id')}
              </div>
              <div className={styles.itemCont}>
                <p className={styles.title}>{item.get('title')}</p>
                <p className={styles.desc}>{item.get('desc')}</p>
                <p className={styles.hot}>{item.get('hot')} 万热度</p>
              </div>
              <div className={styles.itemImg}>
                <img src={item.get('imgUrl')} alt='' />
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  componentDidMount() {
    this.props.getHotData()
  }
}

const mapState = (state) => ({
  hotList: state.getIn(['home', 'hotList'])
})

const mapDispatch = (dispatch) => ({
  getHotData() {
    dispatch(actionCreators.getHotData())
  }
})

export default connect(mapState, mapDispatch)(Hot)
