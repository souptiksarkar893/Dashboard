import React from 'react';
import { Table } from 'react-bootstrap';

function CustomTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John</td>
          <td>Doe</td>
          <td>@john</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane</td>
          <td>Doe</td>
          <td>@jane</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Sam</td>
          <td>Smith</td>
          <td>@sam</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CustomTable;
