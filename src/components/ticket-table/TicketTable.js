import React from "react";
import { Table } from "react-bootstrap";
const TicketTable = ({ tickets }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Subjects</th>
            <th>Status</th>
            <th>Opened Date</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length ? (
            tickets.map((row) => {
              return (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.subjects}</td>
                  <td>{row.status}</td>
                  <td>{row.addedAt}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                Now data Here
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TicketTable;
