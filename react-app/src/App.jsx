import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Vinay",
      gender: "Male",
      salary: 400000,
    },
    {
      id: 2,
      name: "Ajay",
      gender: "Male",
      salary: 430000,
    },
    {
      id: 3,
      name: "Nikhil",
      gender: "Male",
      salary: 7000000,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newRow, setNewRow] = useState({
    id: "",
    name: "",
    gender: "",
    salary: "",
  });

  // Filter data based on search term
  const searchedComments = searchTerm
    ? data.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : data;

  // Function to handle deletion
  const removeData = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // Function to handle adding a new row
  const addRow = () => {
    debugger;
    var x = data;
   x.push(newRow);
    setData(x);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Id</th>
              <th>Gender</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i) => (
              <tr key={i.id}>
                <td>{i.name}</td>
                <td>{i.id}</td>
                <td>{i.gender}</td>
                <td>{i.salary}</td>
                <td className="operation">
                  <button onClick={() => removeData(i.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <h3>Add New Row</h3>
          <input
            type="text"
            placeholder="ID"
            value={newRow.id}
            onChange={(e) => setNewRow({ ...newRow, id: e.target.value })}
          />
          <input
            type="text"
            placeholder="Name"
            value={newRow.name}
            onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Gender"
            value={newRow.gender}
            onChange={(e) => setNewRow({ ...newRow, gender: e.target.value })}
          />
          <input
            type="text"
            placeholder="Salary"
            value={newRow.salary}
            onChange={(e) => setNewRow({ ...newRow, salary: e.target.value })}
          />
          <button onClick={addRow}>Add</button>
        </div>
      </div>
    </>
  );
};

export default App;
