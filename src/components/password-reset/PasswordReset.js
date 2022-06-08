import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const PasswordReset = ({
  handleOnChange,
  email,
  handleOnResetSubmit,
  formSwitcher,
}) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Client Reset Password</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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

              <Button className="mt-2" type="submit">
                Login
              </Button>
            </Form>
            <hr />
            <Row>
              <Col>
                <a href="#!" onClick={() => formSwitcher("login")}>
                  Reset Password
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

PasswordReset.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default PasswordReset;
