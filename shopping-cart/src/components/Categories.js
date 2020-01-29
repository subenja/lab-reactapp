import React, { Component } from "react";
import { Menu } from "antd";

export class Categories extends Component {


  renderCategories() {
    return this.props.categories.map(category => (
      <Menu.Item key={category.id}>
        <span>{category.name}</span>
      </Menu.Item>
    ));
  }

  render() {
    const categoryId = this.props.selectedId
    return (
      <div>
        <Menu
          selectedKeys = {categoryId}
          onClick={(e) => this.props.onCategoryChange(e.key)}
        >
          {this.renderCategories()}
        </Menu>
      </div>
    );
  }
}

export default Categories;
