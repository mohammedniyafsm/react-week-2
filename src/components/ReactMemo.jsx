import React, { useState } from 'react'

function ReactMemo() {
    const [name,setName] = useState("niyaf");
    const [count,setCount] = useState(0);
  return (
    <div>
        
      <Input data={name} />
      <h1>{count}</h1>
      <button onClick={()=>setCount(prev => prev + 1)}>Click</button>
    </div>
  )
}

export default ReactMemo


const Input=React.memo(({data})=>{
    console.log("Render input field ")
    return <input  placeholder={data} />
    
})