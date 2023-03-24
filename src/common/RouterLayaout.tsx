import { Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'
export const RouterLayaout: React.FC<{}> = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	)
}
