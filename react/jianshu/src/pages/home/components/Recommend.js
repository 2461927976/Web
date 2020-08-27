import React, {PureComponent} from "react";
import {RecommendItem, RecommendWrapper} from "../style";
import {connect} from "react-redux";

class Recommend extends PureComponent {
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