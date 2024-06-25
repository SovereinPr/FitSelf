import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './Components/Layout'
import Calc from './pages/CalcPage/Calc'
import Home from './pages/HomePage/Home'
import Meditation from './pages/MeditationPage/Meditation'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/meditation' element={<Meditation />} />
				<Route path='/calculator' element={<Calc />} />
			</Route>
		</Routes>
	)
}

export default App
