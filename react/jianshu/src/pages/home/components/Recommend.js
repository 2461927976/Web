import React, {Component} from "react";
import {RecommendItem, RecommendWrapper} from "../style";
import {connect} from "react-redux";

class Recommend extends Component {
  render() {
    const {recommendList} = this.props
    return (
      <RecommendWrapper>
        {
          recommendList.map(item => {
            return <RecommendItem imgUrl={item.get("imgUrl")} key={item.get("id")}/>
          })
        }
      </RecommendWrapper>
    );
  }
}

const mapState = (state) => ({
  recommendList: state.getIn(["home", "recommendList"])
})

export default connect(mapState, null)(Recommend)