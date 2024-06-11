
function Button(props) {
  return (
    <a href={props.link} className='button-container'>
      <button className='button'>{props.text}</button>
    </a>
  )
}

export default Button;