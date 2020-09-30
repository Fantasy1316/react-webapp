import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import styles from './style.less'

class NavBar extends Component {
  render() {
    const { currentTab, tabShow, handleNavChange } = this.props
    return (
      <div
        className={styles.wrapper}
        style={{ bottom: tabShow ? '0' : '-100px' }}
      >
        <div className={styles.navItem} onClick={() => handleNavChange(1)}>
          {currentTab === 1 ? (
            <img
              className={styles.itemHomeIconFull}
              src='/images/home-full.png'
              alt=''
            />
          ) : (
            <img className={styles.itemIcon} src='/images/home.png' alt='' />
          )}
          <p className={styles.itemName}>首页</p>
        </div>
        <div className={styles.navItem} onClick={() => handleNavChange(2)}>
          {currentTab === 2 ? (
            <img
              className={styles.itemIcon}
              src='/images/vip-full.png'
              alt=''
            />
          ) : (
            <img className={styles.itemIcon} src='/images/vip.png' alt='' />
          )}
          <p className={styles.itemName}>会员</p>
        </div>
        <div className={styles.navItem}>
          <div className={styles.itemAddIcon}>+</div>
        </div>
        <div className={styles.navItem} onClick={() => handleNavChange(3)}>
          {currentTab === 3 ? (
            <img
              className={styles.itemIcon}
              src='/images/note-full.png'
              alt=''
            />
          ) : (
            <img className={styles.itemIcon} src='/images/note.png' alt='' />
          )}
          <p className={styles.itemName}>通知</p>
        </div>
        <div className={styles.navItem} onClick={() => handleNavChange(4)}>
          {currentTab === 4 ? (
            <img
              className={styles.itemIcon}
              src='/images/mine-full.png'
              alt=''
            />
          ) : (
            <img className={styles.itemIcon} src='/images/mine.png' alt='' />
          )}
          <p className={styles.itemName}>我的</p>
        </div>
      </div>
    )
  }
}

const mapState = (state) => ({
  currentTab: state.getIn(['navBar', 'currentTab']),
  tabShow: state.getIn(['navBar', 'tabShow'])
})

const mapDispatch = (dispatch) => ({
  handleNavChange(index) {
    dispatch(actionCreators.changeNavBar(index))
  }
})

export default connect(mapState, mapDispatch)(NavBar)
