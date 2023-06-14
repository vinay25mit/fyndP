import React from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import './App.css';
import StudentTable from './studentTable';
function App() {
  const [students, setStudents] = useState([]);
  const [searchEmail, setSearchEmail] = useState('');
  const [searchRegNo, setSearchRegNo] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('/getdata/students', {
        params: {
          email: searchEmail,
          regNo: searchRegNo,
        },
      });
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };

  return (
    <div>
      <h1>Student Data</h1>
      <div>
        <input
          type="text"
          placeholder="Search by Email"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Reg No"
          value={searchRegNo}
          onChange={(e) => setSearchRegNo(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <StudentTable data={students} />
    </div>
  );

}

export default App;
