import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './Components/Layout'
import Calc from './pages/CalcPage/Calc'
import Home from './pages/HomePage/Home'
import Meditation from './pages/MeditationPage/Meditation'

import { ClerkProvider } from '@clerk/clerk-react'

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY

// function Header() {
// 	return (
// 		<header
// 			style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}
// 		>
// 			<h1>My App</h1>
// 			<SignedIn>
// 				{/* Mount the UserButton component */}
// 				<UserButton />
// 			</SignedIn>
// 			<SignedOut>
// 				{/* Signed out users get sign in button */}
// 				<SignInButton />
// 			</SignedOut>
// 		</header>
// 	)
// }

function App() {
	return (
		<React.Fragment>
			<ClerkProvider publishableKey={clerkPubKey}>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='/meditation' element={<Meditation />} />
						<Route path='/calculator' element={<Calc />} />
					</Route>
				</Routes>
			</ClerkProvider>
		</React.Fragment>
	)
}

export default App
