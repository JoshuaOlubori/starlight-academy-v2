import React from 'react';
// import { Table } from '@/components/ui/table';
const StudentPredictionsTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Student ID</th>
          <th>Failure Risk (%)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.student_id}>
            <td>{row.student_id}</td>
            <td>{parseFloat(row.failure_risk_percentage).toFixed(2)}%</td> {/* Ensure it's a number */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentPredictionsTable;
