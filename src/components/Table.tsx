const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <div className='mt-4 overflow-hidden w-full overflow-x-auto rounded-none border border-black dark:border-neutral-300'>
    <table className='w-full text-left text-sm text-black dark:text-neutral-200'>
      <thead className="border-b border-black bg-neutral-50 text-sm text-black dark:border-neutral-300 dark:bg-neutral-800 dark:text-white">
        <tr className="tfont text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
    </div>
  );
};

export default Table;
