import React, { useMemo, useState } from 'react'

function MemoComponent() {
    const [count,setCount] = useState(0);
    const [total,setTotal] = useState(0);

    const memoFunc =()=>{
        console.log("this Render");
        for(let i=0;i<1000;i++){
            setTotal(i)
        }
    }

    let run = useMemo(()=>memoFunc(),[total]) 

  return (
    <div>
      <h1>{total}</h1>
      <h1>{count}</h1>
      <button onClick={()=>setCount(prev => prev + 1)}>Click here</button>
      <button onClick={()=>setTotal(prev=>prev+1)}>Addd</button>
    </div>
  )
}

export default MemoComponent;
