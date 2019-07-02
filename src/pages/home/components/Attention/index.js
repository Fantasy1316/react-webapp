import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import styles from "./style.less";

class Attention extends Component {
  render() {
    let { attentionList } = this.props;
    return (
      <div className={styles.wrapper}>
        {
          attentionList.map(item => {
            return item.get("type") === 0 ? 
              <div className={styles.item} key={item.get("id")}>
              <div className={styles.itemHeader}>
                <div className={styles.avatar}>
                  <img src={item.get("avatar")} alt="" />
                </div>
                <div className={styles.author}>
                  <div className={styles.name}>{item.get("author")}</div>
                  <p className={styles.type}>{item.get("class")}</p>
                </div>
                <div className={styles.date}>{item.get("date")}</div>
              </div>
              <div className={styles.itemCont}>
                <p className={styles.content}>{item.get("title")}</p>
                <div className={styles.img}>
                  <img src={item.get("imgUrl")} alt="" />
                </div>
              </div>
              <div className={styles.itemFooter}>
                <div className={styles.footerItem}>
                  <img className={styles.itemIcon} src="/images/share.png" alt=""/>
                  <span className={styles.itemName}>转发</span>
                </div>
                <div className={styles.footerItem}>
                  <img className={styles.itemIcon} src="/images/comment.png" alt=""/>
                  <span className={styles.itemName}>评论</span>
                </div>
                <div className={styles.footerItem}>
                  <img className={styles.itemIcon} src="/images/like.png" alt=""/>
                  <span className={styles.itemName}>{item.get("like")}</span>
                </div>
                <div className={styles.detail}>
                  <img className={styles.detailIcon} src="/images/detail.png" alt=""/>
                </div>
              </div>
            </div>
            : 
            <div className={styles.itemOther} key={item.get("id")}>
              <div className={styles.itemHeader}>
                <div className={styles.avatar}>
                  <img src={item.get("avatar")} alt="" />
                </div>
                <div className={styles.author}>
                  <div className={styles.name}>{item.get("author")}</div>
                  <p className={styles.type}>{item.get("class")}</p>
                </div>
                <div className={styles.date}>{item.get("date")}</div>
              </div>
              <div className={styles.title}>{item.get("title")}</div>
              <div className={styles.mainContent}>
                <div className={styles.content}>
                  <span className={styles.likeAuthor}>{item.get("likeAuthor")}：</span>
                  {item.get("content")}
                </div>
                <div className={styles.imgCont}>
                  <img src={item.get("imgUrl")} alt=""/>
                </div>
              </div>
              <div className={styles.itemFooter}>
                <div className={styles.footerItem}>
                  <img className={styles.itemIcon} src="/images/like.png" alt=""/>
                  <span className={styles.itemName}>{item.get("like")}</span>
                </div>
                <div className={styles.footerItem}>
                  <img className={styles.itemIcon} src="/images/comment.png" alt=""/>
                  <span className={styles.itemName}>评论</span>
                </div>
                <div className={styles.detail}>
                  <img className={styles.detailIcon} src="/images/detail.png" alt=""/>
                </div>
              </div>
            </div> 
          })
        }
      </div>
    )
  }

  componentDidMount() {
    this.props.getAttentionData();
  }
}

const mapState = (state) => ({
  attentionList: state.getIn(["home", "attentionList"])
})

const mapDispatch = (dispatch) => ({
  getAttentionData() {
    dispatch(actionCreators.getAttentionData());
  }
})

export default connect(mapState, mapDispatch)(Attention);