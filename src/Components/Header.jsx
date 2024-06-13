import { NavLink } from "react-router-dom";

function Header() {
  return ( 
    <header className='header'>
      <div className='header__content'>
        <h2 className='logo'>__FitSelf</h2>
        <nav className='navPage'>
          <ul className='navPage__ul'>
            <li><NavLink to="/">Главная</NavLink></li>
            <li><NavLink to="/tasks">Задачи</NavLink></li>
            <li><NavLink to="/calculator">Калькулятор калорий</NavLink></li>
            <li><NavLink to="/meditation">Медитация</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;