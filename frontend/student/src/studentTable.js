import React from 'react';
import { useTable } from 'react-table';

const StudentTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      { Header: 'Reg. No', accessor: 'regno' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Physics', accessor: 'marks.physics' },
      { Header: 'Chemistry', accessor: 'marks.chemistry' },
      { Header: 'Math', accessor: 'marks.math' },
      { Header: 'Biology', accessor: 'marks.bio' },
      { Header: 'History', accessor: 'marks.history' },
      { Header: 'Geography', accessor: 'marks.geography' },
      { Header: "Father's Name", accessor: 'father_name' },
      { Header: 'Date of Birth', accessor: 'date_of_birth' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ borderCollapse: 'collapse' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  padding: '8px',
                  borderBottom: '1px solid #ddd',
                  background: '#f2f2f2',
                  color: '#333',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: '8px',
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StudentTable;
