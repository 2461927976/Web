import React, {Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import store from "./store";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <Fragment>
        <Fragment>
          <Input value={this.state.inputValue}
                 placeholder="Todo Info"
                 style={{width: '300px', marginRight: '10px'}}
                 onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        </Fragment>
        <List
          style={{marginTop: "10px", width: "380px"}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>
          )}
        />
      </Fragment>
    )
  }

  handleInputChange(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value
    }
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleBtnClick() {
    const action = {
      type: "add_todo_item"
    }
    store.dispatch(action)
  }

  handleItemDelete(index) {
    // console.log(index)
    const action = {
      type: "delete_todo_item",
      index
    }
    store.dispatch(action)
  }
}

export default TodoList;