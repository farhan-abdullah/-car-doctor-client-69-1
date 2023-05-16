import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch('services.json')
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<div>
			<div className='text-center space-y-5'>
				<h3 className='text-2xl font-semibold text-orange-600'>Services</h3>
				<h1 className='font-bold text-5xl'>Our Service Area</h1>
				<p className='text-[#737373]'>
					the majority have suffered alteration in some form, by injected humour, or
					randomised <br /> words which don't look even slightly believable.
				</p>
			</div>
			<div className='lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 gap-5'>
				{services.map((service) => (
					<ServiceCard key={service._id} service={service}></ServiceCard>
				))}
			</div>
		</div>
	);
};

export default Services;
