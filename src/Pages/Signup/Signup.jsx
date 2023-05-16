import React from 'react';
import img from '../../assets/images/login/login.svg';
const Signup = () => {
	const handleSignup = (event) => {
		event.preventDefault();
	};
	return (
		<div className='hero min-h-screen'>
			<div className='lg:gap-28 hero-content flex-col lg:flex-row'>
				<div className='text-center lg:text-left'>
					<img src={img} alt='' />
				</div>
				<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<div className='card-body'>
						<h1 className='text-3xl text-center font-bold'>Sign Up</h1>
						<form onSubmit={handleSignup}>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input
									name='name'
									type='text'
									placeholder='Name'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									name='email'
									type='email'
									placeholder='Email'
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
									placeholder='Password'
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

export default Signup;
