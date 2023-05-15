import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
	return (
		<div className='hero min-h-screen  rounded-lg'>
			<div className='hero-content flex-col lg:flex-row'>
				<div className='w-1/2  relative'>
					<img src={person} className='max-w-md rounded-lg shadow-2xl' />
					<img
						src={parts}
						className='max-w-sm absolute rounded-lg shadow-2xl right-5 top-1/2 border-8 shadow-2xl'
					/>
				</div>
				<div className='w-1/2 '>
					<h3 className='text-[orange] text-3xl'>About Us</h3>
					<h1 className='text-5xl font-bold'>
						We are qualified & of experience in this field
					</h1>
					<p className='py-6'>
						There are many variations of passages of Lorem Ipsum available, but the
						majority have suffered alteration in some form, by injected humour, or
						randomised words which don't look even slightly believable.
					</p>
					<p className='mb-8'>
						the majority have suffered alteration in some form, by injected humour, or
						randomised words which don't look even slightly believable.
					</p>
					<button className='btn btn-primary'>Get More Info!</button>
				</div>
			</div>
		</div>
	);
};

export default About;
