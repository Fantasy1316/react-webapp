import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { actionCreators as NavBarActionCreators } from "../../common/NavBar/store";
import styles from "./style.less";

class Home extends Component {

  render() {
    const { tabIndex, lineLeft, handleTabChange } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.homeHeader}>
          <div className={styles.searchWrapper}>
            <img className={styles.searchIcon} src="/images/search-icon.png" alt=""/>
            <input className={styles.searchInput} placeholder="性价比高的二本大学"/>
          </div>
          <div className={styles.tabWrapper}>
            <div
              className={styles.tabItem}
              style={{ color: tabIndex === 1 ? '#3d3d3d' : '' }}
              onClick={() => handleTabChange(1, 13.467)}
            >关注</div>
            <div
              className={styles.tabItem}
              style={{ color: tabIndex === 2 ? '#3d3d3d' : '' }}
              onClick={() => handleTabChange(2, 46.933)}
            >推荐</div>
            <div
              className={styles.tabItem}
              style={{ color: tabIndex === 3 ? '#3d3d3d' : '' }}
              onClick={() => handleTabChange(3, 80.4)}
            >热榜</div>
            <p
              className={styles.line}
              style={{ left: `${lineLeft}vw` }}></p>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    let beforeScroll = document.documentElement.scrollTop;
    window.addEventListener("scroll", () => {
      let afterScroll = document.body.scrollTop || document.documentElement.scrollTop;
      if(afterScroll >= beforeScroll) {
        this.props.handleScrollChange(false);
      }else {
        this.props.handleScrollChange(true);
      }
      beforeScroll = afterScroll;
    }, false)
  }
}

const mapState = (store) => ({
  tabIndex: store.getIn(["home", "tabIndex"]),
  lineLeft: store.getIn(["home", "lineLeft"])
})

const mapDispatch = (dispatch) => ({
  handleTabChange(index, left) {
    dispatch(actionCreators.tabChange(index, left));
  },
  handleScrollChange(type) {
    dispatch(NavBarActionCreators.changeNavBarShow(type));
  }
})

export default connect(mapState, mapDispatch)(Home);