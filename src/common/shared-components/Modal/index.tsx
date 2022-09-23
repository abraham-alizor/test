import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

interface ModalProps {
	children: JSX.Element;
	close: any;
	open: any;
}

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});
function Modal(props: ModalProps) {
	return (
		<Dialog
			fullWidth={true}
			maxWidth='md'
			TransitionComponent={Transition}
			open={props.open}
			onClose={props.close}
			aria-describedby='alert-dialog-slide-description'
			className='w-full'
		>
			<DialogActions sx={{ alignSelf: 'flex-end' }}>
				<IconButton onClick={props.close}>
					<CloseIcon />
				</IconButton>
			</DialogActions>
			{props.children}
		</Dialog>
	);
}

export default Modal;
