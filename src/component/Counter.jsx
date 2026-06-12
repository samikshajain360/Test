// import React, { useState } from 'react'

import { useState } from "react"

const Counter = () => {
   const [text, setText] = useState("")
  return(
    <div style={{ padding: "24px" }}>
      <input type="text" 
      placeholder="Type here..."
      value={text}
      style={{ border: "1px solid #333", padding: "8px 10px", width: "260px" }}
      onChange={(e)=>{
        setText(e.target.value)
      }}
      />
      <p>{text}</p>
    </div>
  )
}
export default Counter;
