import React, { useState } from 'react'

function RealDom() {

    const [ items,setItems ] = useState(["A","B","c"])

    const remove =(i)=>{
        setItems(items.filter((_,index)=> index !== i))
    }
  return (
    <div>
    <ul>
      {items.map((item,index)=>(        
          <li key={index}>
            <input type="text" defaultValue={item} />
            {item}<button onClick={()=>remove(index)}>remove</button></li>          
      ))}
    </ul>
    </div>
  )
}

export default RealDom
