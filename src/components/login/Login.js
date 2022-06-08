import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Login = ({
  handleOnChange,
  email,
  password,
  handleSubmit,
  formSwitcher,
}) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Client Login</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={handleOnChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  password={password}
                  placeholder="Enter password"
                  onChange={handleOnChange}
                  required
                />
              </Form.Group>
              <Button className="mt-2" type="submit">
                Login
              </Button>
            </Form>
            <hr />
            <Row>
              <Col>
                <a href="#!" onClick={()=>formSwitcher("passwordreset")}>
                  Forget password?
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Login.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default Login;
