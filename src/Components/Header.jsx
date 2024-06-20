import { NavLink } from "react-router-dom";

function Header() {
  return ( 
    <header className='Header'>
      <div className='Header__content'>
      <NavLink to="/"><h2 className='logo'>&#65343;FitSelf</h2></NavLink>
        <nav className='navPage'>
          <ul className='navPage__ul'>
            <li><NavLink to="/"><p>Главная</p></NavLink></li>
            <li><NavLink to="/tasks"><p>Задачи</p></NavLink></li>
            <li><NavLink to="/calculator"><p>Калькулятор калорий</p></NavLink></li>
            <li><NavLink to="/meditation"><p>Медитация</p></NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;