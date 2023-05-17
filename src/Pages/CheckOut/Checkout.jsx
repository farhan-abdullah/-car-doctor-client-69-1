import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Checkout = () => {
	const service = useLoaderData();
	const { user } = useContext(AuthContext);
	const handleBookService = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const surname = form.surname.value;
		const number = form.number.value;
		const email = form.email.value;
		const order = {
			customerName: name,
			surname,
			email,
			number,
			service: service.title,
			service_id: service._id,
		};
		console.log(order);
		fetch('http://localhost:5000/bookings', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(order),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					alert('service book successfully');
				}
			});
	};
	return (
		<div>
			<h2 className='text-center'>Book Service: {service.title}</h2>
			<form onSubmit={handleBookService} className='card-body'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6'>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Your Name</span>
						</label>
						<input
							name='name'
							type='text'
							placeholder='Your Name'
							className='input input-bordered'
							defaultValue={user?.displayName}
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Your Surname</span>
						</label>
						<input
							name='surname'
							type='text'
							placeholder='Your Surname'
							className='input input-bordered'
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Phone Number</span>
						</label>
						<input
							name='number'
							type='number'
							placeholder='Your Number'
							className='input input-bordered'
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Email</span>
						</label>
						<input
							name='email'
							type='text'
							placeholder='email'
							className='input input-bordered'
							defaultValue={user?.email}
						/>
					</div>
				</div>
				<div className='form-control mt-6'>
					<input className='btn btn-primary' type='submit' value='Place Order' />
				</div>
			</form>
		</div>
	);
};

export default Checkout;
