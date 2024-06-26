import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from '@clerk/clerk-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
	return (
		<header className='Header'>
			<div className='Header__content'>
				<NavLink to='/'>
					<h2 className='logo'>&#65343;FitSelf</h2>
				</NavLink>
				<div>
					<SignedIn>
						<UserButton />
					</SignedIn>
					<SignedOut>
						<SignInButton />
					</SignedOut>
				</div>
				<nav className='navPage'>
					<ul className='navPage__ul'>
						<li>
							<NavLink to='/'>
								<p>Главная</p>
							</NavLink>
						</li>
						<li>
							<NavLink to='/calculator'>
								<p>Калькулятор калорий</p>
							</NavLink>
						</li>
						<li>
							<NavLink to='/meditation'>
								<p>Медитация</p>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<div></div>
		</header>
	)
}

export default Header
