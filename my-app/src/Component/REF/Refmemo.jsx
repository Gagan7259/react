import React, { Component } from "react";

class Refmemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }
  BtnHandler=()=> {
    alert(this.inputRef.current.value);
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.BtnHandler}>click</button>
      </div>
    );
  }
}

export default Refmemo;
