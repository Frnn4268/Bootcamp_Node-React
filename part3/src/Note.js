export const Note = (props) => {
    const {id, content, date} = props
    //console.log({props})

    return (
      <li> 
        <p><strong>{id}</strong></p>
        <p>{content}</p>
  
        <small>
          <time>{date}</time>
        </small>
      </li>  
      
    ) 
  }

//export default Note