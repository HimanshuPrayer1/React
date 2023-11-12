import React from 'react'

function Message(props) {
  return (
    <div style={{width:"300px",height:"200px",backgroundColor:"white",padding:"30px",boxShadow:"1px 2px 2px",marginBottom:"20px"}}>
        <p>{props.msg}</p>
    </div>
  )
}

export default Message