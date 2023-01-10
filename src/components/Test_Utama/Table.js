import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

// TEST SOAL UTAMA NOMOR 3, 4, 5 DAN 6
const Table = () => {
  const [dataTable, setDataTable] = useState([]);
  
  const pagination = paginationFactory({
    sizePerPageList: [
      {
        text: '10',
        value: 10,
      },
      {
        text: '25',
        value: 25,
      },
      {
        text: '50',
        value: 50,
      },
    ],
  });

useEffect(() => {
  const getDataTable = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const { data } = response;
      setDataTable(data);
      // console.log('datas table', data);
    } catch (err) {
      console.log(err);
      setDataTable([]);
    }
  };

  getDataTable();
}, []);

  const deleteById = async (id) => {
    const deleteArray = dataTable.filter((item) => item.id !== id);
    setDataTable(deleteArray);
  };

  const buttonFormat = (cell, row) => {
    return (
      <button
        style={{ border: 'none', backgroundColor: 'transparent', color: 'red' }}
        onClick={deleteById.bind(null, cell)}>
        <FontAwesomeIcon className="icon" icon={faTrash} />
      </button>
    );
  };

  const columns = [
    {
      dataField: 'id',
      text: 'No',
      headerStyle: (colum, colIndex) => {
        return { width: '80px', textAlign: 'center' };
      },
    },
    { dataField: 'title', text: 'Title' },
    { dataField: 'body', text: 'Body' },
    {
      dataField: 'id',
      text: 'Aksi',
      headerStyle: (colum, colIndex) => {
        return { width: '200px', textAlign: 'center' };
      },
      formatter: buttonFormat,
    },
  ];
  return (
    <>
      <div style={{ padding: '40px' }}>
        <BootstrapTable
          data={dataTable}
          columns={columns}
          keyField="title"
          noDataIndication="Data tidak ditemukan"
          pagination={pagination}
        />
      </div>
    </>
  );
};

export default Table;
