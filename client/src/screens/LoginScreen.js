import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		backendAPI(email, password);
	};

	const backendAPI = (email, password) => {
		const database = [
			{ email: 'yunni@gmail.com', password: '1234' },
			{ email: 'hank.dowhan@gmail.com', password: 'test123' },
			{ email: '123han@gmail.com', password: 'test123' },
			{ email: '123dowhan@gmail.com', password: 'test123' },
			{ email: 'han123owhan@gmail.com', password: 'test123' },
			{ email: 'h124dowhan@gmail.com', password: 'test123' },
			{ email: 'han13an@gmail.com', password: 'test123' },
			{ email: 'han123owhan@gmail.com', password: 'test123' },
		];

		const userData = database.find((user) => user.email === email);

		if (userData) {
			if (userData.password === password) {
				setMessage(`환영합니다 ${email}님!`);
			} else {
				setMessage('유저 정보를 확인하세요.');
			}
		} else {
			setMessage('유저 이메일이 존재하지 않습니다.');
		}
	};

	return (
		<div className='login'>
			<div className='wrap'>
				<div className='loginbox'>
					<div className='box'>
						<h1>Login</h1>
						<div>{message}</div>
						<form onSubmit={submitHandler}>
							<Stack spacing={2}>
								<TextField
									id='outlined-basic'
									label='EMAIL ADRESS'
									variant='outlined'
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									type='text'
									name='email'
									required
								/>
								<TextField
									id='outlined-password-input'
									label='PASSWORD'
									type='password'
									autoComplete='current-password'
									onChange={(e) => setPassword(e.target.value)}
									value={password}
									name='password'
									required
								/>
							</Stack>
							<div>
								<Button variant='contained' type='submit'>
									LOGIN
								</Button>
							</div>
						</form>
					</div>
					<div className='discription'>
						<h2>
							Not a <br />
							MEMBER?
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
							laudantium magni suscipit facilis ducimus dolore sed incidunt
							praesentium, ipsam molestiae qui! Libero culpa fugiat perferendis
							minima amet numquam optio enim?
						</p>
						<Button variant='outlined'>REGISTER NOW</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
