import { useState } from 'react';
import './App.css';
 
function App () {
const[name,setName]=useState("");
const[surname,setSurname]=useState("");
const[email,setEmail]=useState("");
const[id,setId]=useState("");
const[phone,setPhone]=useState("");
const[table,setTable]=useState([]);

const handleSubmit=(e)=>{
  console.log(name,surname,email,id,phone)
  const date={name,surname,email,id,phone}
  if(name&&surname&&email&&id&&phone){
    setTable((th)=>[...th,date])
    setName("")
    setSurname("")
    setEmail("")
    setId("")
    setPhone("")
  }
}
  return(
    <div className="App">
    <h1>React</h1>
    <form onSubmit={handleSubmit}>

    <div>
    <div type="label">Name:</div>
    <input name="name" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>

    <div>
    <div type="label">Surname:</div>
    <input name="surname" placeholder='surname' value={surname} onChange={(e)=>setSurname(e.target.value)}/>
    </div>

    <div>
    <div type="label">Email:</div>
    <input name="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>

    <div>
    <div type="label">Id Number:</div>
    <input name="id" placeholder='id' value={id} onChange={(e)=>setId(e.target.value)}/>
    </div>

    <div>
    <div type="label">Phone Number:</div>
    <input name="phone" placeholder='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
    </div>

    <button>Submit</button>
    </form>

{
  table.map((a)=><div>
   <th>{a.name}</th>
   <th>{a.surname}</th>
   <th>{a.email}</th>
   <th>{a.id}</th>
   <th>{a.phone}</th>
  </div>)
}

    </div>
  );
  
      
}
export default App;




















