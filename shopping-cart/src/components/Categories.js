import React, { Component } from "react";
import { Menu } from "antd";

export class Categories extends Component {


  state = {
    current: "1"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  renderCategories() {
    return this.props.categories.map( category =>
      <Menu.Item key={category.id}><span>{category.name}</span></Menu.Item>
      )
  }

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
        {this.renderCategories()}
        </Menu>
      </div>
    );
  }
}

export default Categories;
