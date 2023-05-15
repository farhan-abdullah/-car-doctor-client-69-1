import React from 'react';
import img1 from './../../../assets/images/banner/1.jpg';
import img2 from './../../../assets/images/banner/2.jpg';
import img3 from './../../../assets/images/banner/3.jpg';
import img4 from './../../../assets/images/banner/4.jpg';
import img5 from './../../../assets/images/banner/5.jpg';
import img6 from './../../../assets/images/banner/6.jpg';
const Banner = () => {
	return (
		<div className='carousel w-full h-[550px] mx-auto rounded-lg mb-16 mt-10'>
			<div id='slide1' className='carousel-item relative w-full'>
				<img src={img1} className='w-full ' />
				<div className='absolute h-full flex-col space-y-7 p-10 items-center transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ] '>
					<div className='text-6xl text-[white] font-bold'>
						Affordable Price For Car Servicing
					</div>
					<div className='text-[white]'>
						There are many variations of passages of available, but the majority have{' '}
						<br />
						suffered alteration in some form
					</div>
					<button className='btn btn-success mr-5'>Success</button>

					<button className='btn btn-outline btn-secondary'>Button</button>
				</div>
				<div className='absolute flex transform -translate-y-1/2 left-5 right-5  justify-end  bottom-0'>
					<a href='#slide4' className='btn btn-circle mr-10'>
						❮
					</a>
					<a href='#slide2' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div id='slide2' className='carousel-item relative w-full'>
				<img src={img2} className='w-full' />
				<div className='absolute flex  transform -translate-y-1/2 left-5 right-5  justify-end  bottom-0'>
					<a href='#slide1' className='btn btn-circle mr-10'>
						❮
					</a>
					<a href='#slide3' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div id='slide3' className='carousel-item relative w-full'>
				<img src={img3} className='w-full' />
				<div className='absolute flex   transform -translate-y-1/2 left-5 right-5    justify-end  bottom-0'>
					<a href='#slide2' className='btn btn-circle mr-10'>
						❮
					</a>
					<a href='#slide4' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div id='slide4' className='carousel-item relative w-full'>
				<img src={img4} className='w-full' />
				<div className='absolute flex   transform -translate-y-1/2 left-5 right-5  justify-end  bottom-0'>
					<a href='#slide3' className='btn btn-circle mr-10'>
						❮
					</a>
					<a href='#slide5' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div id='slide5' className='carousel-item relative w-full'>
				<img src={img5} className='w-full' />
				<div className='absolute flex  transform -translate-y-1/2 left-5 right-5  justify-end  bottom-0'>
					<a href='#slide4' className='btn btn-circle mr-10'>
						❮
					</a>
					<a href='#slide6' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div id='slide6' className='carousel-item relative w-full'>
				<img src={img6} className='w-full' />
				<div className='absolute flex  transform -translate-y-1/2 left-5 right-5  justify-end  bottom-0'>
					<a href='#slide5' className='btn btn-circle mr-10'>
						❮
					</a>
					<a href='#slide1' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
		</div>
	);
};

export default Banner;
