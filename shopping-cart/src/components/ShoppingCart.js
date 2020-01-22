import React, { Component } from 'react' //rcep
import Categories from './Categories.js'
import Products from './Products.js'
import Cart from './Cart.js'
import {Row, Col} from 'antd'

export class ShoppingCart extends Component {

  render() {
    return (
      <div>
        <Row type="flex" align="center">
          <Col span={3}>
            <Categories />
          </Col>
          <Col span={13}>
            <Products />
          </Col>
          <Col span={6}>
            <Cart />
          </Col>                    
        </Row>
      </div>
    )
  }
}

export default ShoppingCart
