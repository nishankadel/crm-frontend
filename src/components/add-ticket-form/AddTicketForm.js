import React from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmData }) => {
  console.log(frmData);
  return (
    <>
      <Container>
        <Card className="form-box">
          <Card.Body>
            <Row>
              <Col>
                <h1 className="text-info text-center">Add New Ticket</h1>
                <hr />
                <Form autoComplete="off" onChange={handleOnSubmit}>
                  <Form.Group>
                    <Form.Label column sm={3}>
                      Subject
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={frmData.subject}
                        placeholder="Enter Subject"
                        onChange={handleOnChange}
                        required
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label>Issue Found</Form.Label>
                    <Form.Control
                      type="date"
                      name="issuedate"
                      value={frmData.issuedate}
                      required
                      onChange={handleOnChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Detail</Form.Label>
                    <Form.Control
                      as="textarea"
                      value={frmData.detail}
                      name="detail"
                      onChange={handleOnChange}
                      rows="5"
                      required
                    />
                  </Form.Group>
                  <Button variant="info" className="mt-2" type="submit">
                    Login
                  </Button>
                </Form>
                <hr />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmData: PropTypes.object.isRequired,
};

export default AddTicketForm;
