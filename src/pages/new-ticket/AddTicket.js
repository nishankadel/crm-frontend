import React, {  useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddTicketForm from "../../components/add-ticket-form/AddTicketForm";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";

const initialFrmDt = {
  subject: "",
  issuedate: "",
  detail: "",
};
const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFrmData({
      ...frmData,
      [name]: value,
    });
  };


  return (
    <>
      <Container>
        <Row>
          <Col>
            <BreadCrumb page="Add New Ticket" />
          </Col>
        </Row>
        <Row>
          <Col>
            <AddTicketForm
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
              frmData={frmData}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddTicket;
