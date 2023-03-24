import { Button, Container } from '@mui/material'
import './App.css'
import { NavBar } from './common/NavBar'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from '../Router'
import { NotificationProvider } from './context/notification.context'

function App() {
	return (
		<NotificationProvider>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</NotificationProvider>
	)
}

export default App
