import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/Users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching data', error));
  }, []);

  return (
    <div className="App">
      <h1>Users List</h1>
      <ul>
        {Users.map((user, index) => (
          <li key={index}>{user.name}</li> // assuming the users table has a column `name`
        ))}
      </ul>
    </div>
  );
}

export default App;
