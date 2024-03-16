
export default function ButtonVariants() {
  return (
    <span className='wrapper'>
      <button className='button-create' style={{backgroundColor:"darkblue", color:"white", margin:"10px"}}>Create</button>
      <button className='button-update' style={{backgroundColor:"red", color:"white", margin:"10px"}}>Update</button>
      <button className='button-delete' style={{backgroundColor:"purple", color:"white", margin:"10px"}}>Delete</button>
    </span>
  )
}
