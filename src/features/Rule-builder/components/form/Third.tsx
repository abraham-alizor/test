import React from 'react';
import { SVG_1, SVG_LOADING } from '../../../../assets';
import Typography from '../../../../common/shared-components/Typography';

function Third() {
	return (
		<div className='pt-6 pb-20  flex  flex-col items-center justify-center'>
			<div className='flex flex-col justify-center items-center w-[80%] border border-custom-gray-300 rounded-xl py-6'>
				<div className=' px-10 mb-16 w-full flex justify-start items-center'>
					<div className='h-6 '>
						<img src={SVG_1} alt='' className='h-full' />
					</div>
					<Typography variant='h5' textStyle=' text-left ml-2 '>
						My first union rule
					</Typography>
				</div>
				<img src={SVG_LOADING} className='animate-spin' />

				<Typography variant='label' textStyle='mt-3'>
					Sign the transaction..
				</Typography>
			</div>
		</div>
	);
}

export default Third;
