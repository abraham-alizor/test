import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';
import * as yup from 'yup';
import { FormContext } from '../../../../App';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { SVG_1, SVG_2, SVG_3, SVG_5, SVG_6 } from '../../../../assets';
import Typography from '../../../../common/shared-components/Typography';

function Second() {
	const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext);

	const renderError = (message: string) => <p className='italic text-red-600'>{message}</p>;

	const ValidationSchema = yup.object().shape({
		workspaceName: yup.string().required(),
		workspaceURL: yup.string().url().required(),
	});

	const handleClick = () => {
		const data = { ...formData };

		setFormData(data);
		setActiveStepIndex(activeStepIndex + 1);
	};
	const countries = [
		{ icon: SVG_5, label: 'passport issued by US' },
		{ icon: SVG_2, label: 'passport issued by US' },
		{ icon: SVG_3, label: 'passport issued by US' },
		{ icon: SVG_5, label: 'passport issued by US' },
	];

	return (
		<div className='pt-6 pb-20  flex  flex-col items-center justify-center'>
			<Formik
				initialValues={{
					workspaceName: '',
					workspaceURL: '',
				}}
				validationSchema={ValidationSchema}
				onSubmit={(values) => {
					const data = { ...formData, ...values };
					setFormData(data);
					setActiveStepIndex(activeStepIndex + 1);
				}}
			>
				<Form className='flex flex-col justify-center items-center w-[80%] border border-custom-gray-300 rounded-xl py-6'>
					<div className=' px-10 mb-16 w-full flex justify-start items-center'>
						<div className='h-6 '>
							<img src={SVG_1} alt='' className='h-full' />
						</div>
						<Typography variant='h5' textStyle=' text-left ml-2 '>
							Which Type of Rule do you want to create?
						</Typography>
					</div>
					<Autocomplete
						id='country-select-demo'
						sx={{ width: 300 }}
						options={countries}
						autoHighlight
						getOptionLabel={(option) => option.label}
						renderOption={(props, option) => (
							<Box
								className='px-8'
								component='li'
								sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
								{...props}
							>
								<img
									loading='lazy'
									width='20'
									src={`${option.icon}`}
									srcSet={`${option.icon}`}
									alt=''
								/>
								<span className='text-xs'>{option.label}</span>
								<div className='h-4'>
									<img loading='lazy' width='20' src={SVG_6} alt='' className='ml-4 h-full' />
								</div>
							</Box>
						)}
						renderInput={(params) => (
							<TextField
								{...params}
								label='Choose a country'
								inputProps={{
									...params.inputProps,
									autoComplete: 'new-password', // disable autocomplete and autofill
								}}
							/>
						)}
					/>
				</Form>
			</Formik>
			<div className='flex justify-end w-full pt-6'>
				<button
					className='rounded-md bg-success font-medium text-black my-2 py-2 px-4'
					type='submit'
					onClick={handleClick}
				>
					Create Rule
				</button>
			</div>
		</div>
	);
}

export default Second;
