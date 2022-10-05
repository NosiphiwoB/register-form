import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [table, setTable] = useState([]);
  const [list, setList] = useState([]);

  const handleDelete = (id) => {
    console.log(id);
    let newlist = table.filter((item) => item.id !== id);
    setTable([...newlist]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    list.id = uuidv4();
    console.log(name, surname, email, idNumber, phone);
    const date = { id: uuidv4(), name, surname, email, idNumber, phone };
    if (name && surname && email && idNumber && phone) {
      setTable((th) => [...th, date]);
      setName("");
      setSurname("");
      setEmail("");
      setIdNumber("");
      setPhone("");
    }
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <br/>
      <form onSubmit={handleSubmit}>
        <div>
          <div type="label">Name:</div>
          <input
            name="name"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br/>

        <div>
          <div type="label">Surname:</div>
          <input
            name="surname"
            placeholder="Enter your surname..."
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <br/>

        <div>
          <div type="label">Email:</div>
          <input
            name="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br/>

        <div>
          <div type="label">Id Number:</div>
          <input
            name="idNumber"
            placeholder="Enter your id number..."
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
          />
        </div>
        <br/>

        <div>
          <div type="label">Phone Number:</div>
          <input
            name="phone"
            placeholder="Enter your phone no..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <br/>

        <button id="submit">Submit</button>
      </form>
      <br />
      <br />

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email Address</th>
              <th>Id Number</th>
              <th>Cellphone Number</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.idNumber}</td>
                <td>{item.phone}</td>
                <td>
                  {" "}
                  <button id="delete" onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;
