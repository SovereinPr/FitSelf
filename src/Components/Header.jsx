
function Header() {
  return ( 
  <>
    <header className='header'>
      <div className='header__content'>

        <h2 className='logo'>__FitSelf</h2>

        <nav className='navPage'>
          <ul className='navPage__ul'>
            <li className="navigation"><a href="/">Главная</a></li>
            <li className="navigation"><a href="/">Медитация</a></li>
            <li className="navigation"><a href="/">Задачи</a></li>
            <li className="navigation"><a href="/">Калькулятор калорий</a></li>
          </ul>
        </nav>

      </div>
    </header>
  </>
  )
}

export default Header;