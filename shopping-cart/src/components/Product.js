import React, { Component } from "react";
import { Card, Row, Button } from "antd";
import Text from 'antd/lib/typography/Text'

export class Product extends Component {

  render() {
    const product = this.props.productDetail;
    return (
        <Card
          hoverable
          cover={<img src={product.image} alt={product.name} />}
        >
          <h4 style={{height:'120px'}}>{product.name}</h4>
          <p style={{height: '250px', overflowY:'scroll'}}>{product.description}</p>
          <Row>
            <Text code>{product.price} Baht</Text>
            <Button onClick={() => this.props.handleClickAddToCart(product)}>Add to Cart</Button>
          </Row>
        </Card>

    );
  }
}

export default Product;
