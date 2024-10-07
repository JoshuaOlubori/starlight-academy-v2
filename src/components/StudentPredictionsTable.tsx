import React from 'react';
// import { Table } from '@/components/ui/table';
const StudentPredictionsTable = ({ data }) => {
  return (
    <div className='overflow-hidden w-full overflow-x-auto rounded-none border border-black dark:border-neutral-300'>
    <table className='w-full text-left text-sm text-black dark:text-neutral-200'>
      <thead className='border-b border-black bg-neutral-50 text-sm text-black dark:border-neutral-300 dark:bg-neutral-800 dark:text-white'>
        <tr>
          <th scope="col" className="p-4">Student ID</th>
          <th scope="col" className="p-4">Failure Risk (%)</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-black dark:divide-neutral-300">
        {data.map((row) => (
          <tr key={row.student_id} className='even:bg-violet-500/5 dark:even:bg-violet-400/10'>
            <td>{row.student_id}</td>
            <td>{parseFloat(row.failure_risk_percentage).toFixed(2)}%</td> {/* Ensure it's a number */}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default StudentPredictionsTable;
