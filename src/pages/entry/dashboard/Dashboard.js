import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TicketTable from "../../../components/ticket-table/TicketTable";
import tickets from "../../../assets/data/dummy-tickets.json";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";

const Dashboard = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <BreadCrumb page="Dashboard" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-5 mb-2">
            <Button
              variant="info"
              style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Add Ticket
            </Button>
          </Col>

          <Row>
            <Col className="text-center mb-2">
              <div>Total Tickets: 50</div>
              <div>Pending Tickets: 5</div>
            </Col>
          </Row>

          <Row>
            <Col className=" mb-2">Recently Added Tickets</Col>
          </Row>
          <hr />
          <Row>
            <Col className="recent-ticket">
              <TicketTable tickets={tickets} />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
