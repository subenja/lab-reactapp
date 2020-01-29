import React, { Component } from "react";
import { Table, Button } from "antd";

export class Cart extends Component {
  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'product.name'
      },
      {
        title: 'Price',
        dataIndex: 'product.price'
      },
      {
        title: 'QTY',
        dataIndex: 'amount'
      }, 
      {
        title: 'Action',
        dataIndex: '',
        render: (text, cartItem) => <Button>Delete</Button>
      }
    ];
    return (
      <div>
        <Table
          columns={columns}
          dataSource={this.props.cart}
          bordered
        />
      </div>
    );
  }
}

export default Cart;
