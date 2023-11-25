export const Note = ({ title, body }) => {
    //const {id, content, date} = props
    //console.log({props})

    return (
      <li> 
        <p><strong>{title}</strong></p>
        <p>{body}</p>
      </li>  
      
    ) 
  }

//export default Note