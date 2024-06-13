
function Button(props) {
  return (
    <a href={props.link} className='button-container'>
      <button className='button' title={props.title}>{props.text}</button>
    </a>
  )
}

export default Button;