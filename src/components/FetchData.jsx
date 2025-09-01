import React, { useEffect, useState } from 'react'

function FetchData() {
    const [ data,setData ] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then((response)=>response.json())
        .then((rdata)=>{
            setData(rdata);
             console.log(rdata);
        })
    },[])
function addData() {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: "niyaf",
      email: "MAxx"
    })
  })
  .then((response) => response.json())
  .then((rdata) => setData([...data, rdata]));
}

function deleteData(id) {
  fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE"
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete");
    }
    setData(data.filter((user) => user.id !== id));
  });
}

return (
  <div>
    <button onClick={addData}>Click</button>
    {data.map((m) => (
      <div key={m.id}>
        <h3>{m.username}</h3>
        <button onClick={() => deleteData(m.id)}>Delete</button>
      </div>
    ))}
  </div>
);

}

export default FetchData
