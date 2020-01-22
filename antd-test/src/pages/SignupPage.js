import React from "react";
import { Row, Col, Form, Input, Button, Icon } from "antd";

export default class SignupPage extends React.Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="center" align="middle">
          <Col span={24} style={{ textAlign: "center", marginBottom: "2em" }}>
            <img
              style={{ maxWidth: "150px" }}
              src={"https://image.flaticon.com/icons/svg/124/124010.svg"}
            />
          </Col>
          <Col span={12} type="flex" justify="center">
            <Row gutter={[16, 24]}>
              <Col>
                E-mail:
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              </Col>
            </Row>
          <Row gutter={[16, 24]}>
            <Col>
              password:
              <Input.Password
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Password"
              />
            </Col>
          </Row>
          <Row gutter={[16, 24]}>
            <Col>
              Confirm passwprd
              <Input.Password
                prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Confirm Password"              
               />
            </Col>
          </Row>
          <Row gutter={[16, 24]}>
            <Col>
              Name:
              <Input />
            </Col>
          </Row>
          <Row gutter={[16, 24]}>
            <Col>
              <Button type="primary" htmlType="submit">
                Signup
              </Button>
            </Col>
          </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
