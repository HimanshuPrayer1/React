import React, { useEffect } from 'react'
import Message from './Message'

function Messanger() {
    let d="hello :)"
  
  return (
    <div>
        <Message msg={d}/>
        <Message msg="hello1"/>
        <Message msg="hello2"/>
        
 
    </div>
  )
}

export default Messanger