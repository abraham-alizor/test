import { createContext, useState } from 'react';
import { SVG_PRIORITY } from '../../assets';
import Modal from '../../common/shared-components/Modal';
import Stepper from '../../common/shared-components/Stepper';
import Typography from '../../common/shared-components/Typography';
import StepControl from './components/Step-control';

function RuleBuilder() {
	const [open, setOpen] = useState<boolean>(true);
	return (
		<div className='w-screen h-screen flex flex-col items-center justify-start'>
			<Modal open={open} close={() => setOpen(false)}>
				<div className=' w-full h-full px-8'>
					<div className='flex justify-start items-center mb-8'>
						<Typography textStyle='text-dark-blue font-bold'>Rule Bulder</Typography>
						<div className='h-3'>
							<img src={SVG_PRIORITY} alt='ic-priority' className='h-full ml-2' />
						</div>
					</div>

					<Stepper />
					<StepControl />
				</div>
			</Modal>
		</div>
	);
}

export default RuleBuilder;
