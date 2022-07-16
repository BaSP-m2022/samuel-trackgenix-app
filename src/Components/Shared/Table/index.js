import React from 'react';
import TableContent from './TableContent';
import styles from './table.module.css';

const Table = ({ data, headersName, headers, editData, setShowModal, getIdFromRow }) => {
  return (
    <section className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.headers}>
          <tr>
            {headersName.map((headerName, index) => {
              return <th key={index}>{headerName}</th>;
            })}
            <th></th>
          </tr>
        </thead>
        <TableContent
          data={data}
          headers={headers}
          editData={editData}
          setShowModal={setShowModal}
          getIdFromRow={getIdFromRow}
        />
      </table>
    </section>
  );
};

export default Table;
