import React, { useContext } from 'react';
import { FormContext } from '../../../../App';
import First from '../form/First';
import Second from '../form/Second';
import Third from '../form/Third';

function StepControl() {
	const { activeStepIndex } = useContext(FormContext);
	let stepContent: any;
	switch (activeStepIndex) {
		case 0:
			stepContent = <First />;
			break;
		case 1:
			stepContent = <Second />;
			break;
		case 2:
			stepContent = <Third />;
			break;
		default:
			break;
	}

	return stepContent;
}

export default StepControl;
