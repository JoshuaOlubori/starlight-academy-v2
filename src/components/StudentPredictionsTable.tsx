import React from 'react';
import { Table } from '@/components/ui/table';

const StudentPredictionsTable = ({ data }) => {
  return (
    <div className="rounded-md border">
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-[100px]">Student ID</Table.Head>
            <Table.Head>Risk of Failure (%)</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((row) => (
            <Table.Row key={row.student_id}>
              <Table.Cell className="font-medium">{row.student_id}</Table.Cell>
              <Table.Cell>{row.failure_risk_percentage.toFixed(2)}%</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default StudentPredictionsTable;