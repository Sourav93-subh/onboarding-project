import axios from "axios";
import { useState } from "react";

function UserForm() {
  const [name,setName] = useState("");

  const submitUser = async () => {
    await axios.post("http://localhost:4000/users",{name});
  };

  return (
    <div>
      <input onChange={(e)=>setName(e.target.value)} />
      <button onClick={submitUser}>Add</button>
    </div>
  );
}

export default UserForm;