import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';
import * as yup from 'yup';
import { FormContext } from '../../../../App';
import { SVG_1, SVG_2, SVG_3, SVG_4, SVG_5, SVG_6 } from '../../../../assets';
import Typography from '../../../../common/shared-components/Typography';

function First() {
	const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext);

	const renderError = (message: string) => <p className='italic text-red-600'>{message}</p>;

	const ValidationSchema = yup.object().shape({
		name: yup.string().required(),
		email: yup.string().email().required(),
	});

	const data = [
		{ title: 'Union', icon: SVG_1 },
		{ title: 'Intersection', icon: SVG_2 },
		{ title: 'Complement', icon: SVG_3 },
		{ title: 'Difference', icon: SVG_4 },
	];

	const handleClick = () => {
		const data = { ...formData };

		setFormData(data);
		setActiveStepIndex(activeStepIndex + 1);
	};
	return (
		<div className='pt-6 pb-20  flex items-center justify-center'>
			<Formik initialValues={{}} validationSchema={ValidationSchema} onSubmit={(values) => {}}>
				{({ handleSubmit }) => (
					<Form className='flex flex-col justify-center items-center w-[80%] border border-custom-gray-300 rounded-xl py-6'>
						<Typography variant='h5' textStyle='w-full text-left px-10'>
							Which Type of Rule do you want to create?
						</Typography>
						<div className='w-[80%] pt-12 flex justify-between items-end flex-wrap '>
							{data.map((item, i) => (
								<div
									className='flex justify-between items-center border rounded-xl border-custom-gray-300 px-4 py-2 w-[48%] mb-4'
									onClick={handleClick}
								>
									<div className='h-6 flex justify-start items-center'>
										<img src={item.icon} alt='' className='h-full' />
										<Typography
											variant='label'
											textStyle='text-blue font-medium ml-2 hover:font-bold'
										>
											{item.title}
										</Typography>
									</div>
									<div className='h-4'>
										<img src={SVG_6} alt='' className='h-full' />
									</div>
								</div>
							))}
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default First;
