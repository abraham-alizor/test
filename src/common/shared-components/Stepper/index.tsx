import React, { useContext, useEffect } from 'react';
import { FormContext } from '../../../App';

function Stepper() {
	const { activeStepIndex } = useContext(FormContext) as any;
	useEffect(() => {
		const stepperItems = document.querySelectorAll('.stepper-item, .stepper-border');
		const stepperText = document.querySelectorAll('.stepper-text');

		stepperItems.forEach((step, i) => {
			if (i <= activeStepIndex) {
				step.classList.add('bg-success', 'border-success', 'text-white');
			} else {
				step.classList.remove('bg-success', 'border-success', 'text-white');
				step.classList.add('bg-custom-gray-300');
			}
		});
		stepperText.forEach((step, i) => {
			if (i <= activeStepIndex) {
				step.classList.add('text-success');
			} else {
				step.classList.remove('text-success');
			}
		});
	}, [activeStepIndex]);

	return (
		<div className='flex items-center flex-col '>
			<div className='w-[70%] flex flex-row items-center justify-center '>
				<div className='stepper-item w-4 h-4 text-center font-medium border-2 rounded-full'></div>

				<div className='stepper-border flex-auto border-t-2 '></div>

				<div className='stepper-item w-4 h-4 text-center font-medium border-2 rounded-full'></div>
				<div className='stepper-border flex-auto border-t-2 '></div>
				<div className='stepper-item w-4 h-4 text-center font-medium border-2 rounded-full'></div>
			</div>
			<div className='w-full flex flex-row items-center justify-around '>
				<p className='stepper-text text-xs '>Select Expression</p>
				<p className='stepper-text text-xs '>Define Rule Set</p>
				<p className='stepper-text text-xs '>Create Rule</p>
			</div>
		</div>
	);
}

export default Stepper;
