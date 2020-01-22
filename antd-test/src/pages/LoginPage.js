import React from "react";
import { Row, Col, Form, Input, Icon, Button } from "antd";

export default class LoginPage extends React.Component {
  render() {
    return (
      <Row
        style={{ height: "100wh" }}
        type="flex"
        justify="center"
        align="middle"
      >
        <Col span={8} style={{ justify: "end", marginRight: "15px" }}>
          <img
            style={{ maxWidth: "150px" }}
            src={"https://image.flaticon.com/icons/svg/124/124010.svg"}
          />
        </Col>
        <Col span={8}>
          <Row>
            <Col>
              Username:
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              password:
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Button type="link" size={"large"}>
                Signup
              </Button>
            </Col>
            <Col span={12}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
