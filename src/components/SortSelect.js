import React, { Component } from 'react';

export default class SortSelect extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    }

    this._onChange = this._onChange.bind(this);
  }

  _onChange(e) {
    let { value } = e.target;
    this.props.changeSort(value);
  }

  render() {
    let { value } = this.state;

    return (
      <div className="form-group" value={value} onChange={this._onChange}>
        <label>Sort By:</label>
        <select className="form-control">
          <option value={null}></option>
          <option value='name'>Name</option>
          <option value='number'>Id</option>
        </select>
      </div>
    )
  }
}
