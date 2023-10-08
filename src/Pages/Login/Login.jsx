import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
	const { signIn } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || '/';
	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		signIn(email, password)
			.then((res) => {
				const user = res.user;
				const loggedUser = {
					email: user?.email,
				};
				fetch('http://localhost:5000/jwt', {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify(loggedUser),
				})
					.then((res) => res.json())
					.then((data) => {
						//save token in local storage
						localStorage.setItem('car-access-token', data.token);
						navigate(from, { replace: true });
					});
			})
			.catch((e) => {
				console.log(e.message);
			});
	};
	return (
		<div className='hero min-h-screen'>
			<div className='lg:gap-28 hero-content flex-col lg:flex-row'>
				<div className='text-center lg:text-left'>
					<img src={img} alt='' />
				</div>
				<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<div className='card-body'>
						<h1 className='text-3xl text-center font-bold'> Login</h1>
						<form onSubmit={handleLogin}>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									name='email'
									type='text'
									placeholder='email'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<input
									name='password'
									type='text'
									placeholder='password'
									className='input input-bordered'
								/>
								<label className='label'>
									<a href='#' className='label-text-alt link link-hover'>
										Forgot password?
									</a>
								</label>
							</div>
							<div className='form-control mt-6'>
								<input className='btn btn-primary' type='submit' value='Login' />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
