import {
	Box,
	Button,
	Container,
	Grid,
	Paper,
	TextField,
	Typography,
} from '@mui/material'
import { useState } from 'react'
import { useNotification } from '../../context/notification.context'
import { LoginValidate } from '../../utils/validateForm'

// types
type LoginType = {
	username: string
	password: string
}

export const LoginPage: React.FC<{}> = () => {
	const { getError, getSuccess } = useNotification()

	const [loginData, setloginData] = useState<LoginType>({
		username: '',
		password: '',
	})

	const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
		setloginData({
			...loginData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault()
		LoginValidate.validate(loginData)
			.then(() => {
				getSuccess(JSON.stringify(loginData))
			})
			.catch((err) => {
				getError(err.message)
			})
	}

	return (
		<Container maxWidth='sm'>
			<Grid
				container
				direction='row'
				alignItems='center'
				justifyContent='center'
				sx={{ minHeight: '100vh' }}>
				<Grid item>
					<Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
						<Typography variant='h5'>Iniciar sesión </Typography>

						<Box component='form' onSubmit={handleSubmit}>
							<TextField
								variant='outlined'
								margin='normal'
								label='Email'
								type='text'
								// required
								fullWidth
								name='username'
								onChange={dataLogin}
							/>
							<TextField
								variant='outlined'
								margin='normal'
								label='Password'
								type='password'
								// required
								fullWidth
								name='password'
								onChange={dataLogin}
							/>
							<Button
								fullWidth
								type='submit'
								variant='contained'
								sx={{ marginY: 1.5 }}>
								Iniciar sesion
							</Button>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	)
}
