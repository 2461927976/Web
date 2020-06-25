import React, {Component, Fragment} from 'react';
import './style.css';

/*function App() {
  return (
    <div>TodoList</div>
  );
}*/
class App extends Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    this.state = {
      inputValue: 'hello',
      list: []
    }
  }

  handleInputChange(e) {
    // console.log(e.target.value);
    // console.log(this);
    this.setState({
      inputValue: e.target.value
    })
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      if (this.state.inputValue === '') {
        console.log("输入内容为空！")
        return
      }
      const list = [...this.state.list, this.state.inputValue];
      this.setState({
        list,
        inputValue: ''
      })
    }
  }

  handleItemClick(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    // console.log(list);
    this.setState({
      list
    })
  }

  getListItems() {
    return this.state.list.map((value, index) => {
      return (
        <li key={index}
            onClick={this.handleItemClick.bind(this, index)}
            dangerouslySetInnerHTML={{__html: value}}
        >
        </li>
      )
    })
  }

  render() {
    // 这是普通的注释
    return (
      <Fragment>
        {/*这是一个lable*/}
        <label htmlFor='myinput'>请输入内容：</label>
        <input
          id='myinput'
          className='input'
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
        />
        <ul>
          {this.getListItems()}
        </ul>
      </Fragment>
    )
  }
}

export default App;
