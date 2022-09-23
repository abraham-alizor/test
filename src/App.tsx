import { createContext, useState } from 'react';
import './App.css';
import RuleBuilder from './features/Rule-builder';

export const FormContext = createContext<any | null>(null);
function App() {
	const [activeStepIndex, setActiveStepIndex] = useState(0);
	const [formData, setFormData] = useState({});
	return (
		<FormContext.Provider value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}>
			<RuleBuilder />
		</FormContext.Provider>
	);
}

export default App;
