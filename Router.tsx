import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './src/pages/home/index'
import { LoginPage } from './src/pages/login/index'
import { RouterLayaout } from './src/common/RouterLayaout'

export const AppRouter: React.FC<{}> = () => {
	return (
		<Routes>
			<Route path='/' element={<RouterLayaout />}>
				<Route path='/' element={<HomePage />} />
			</Route>
			<Route path='/login' element={<LoginPage />} />
		</Routes>
	)
}
