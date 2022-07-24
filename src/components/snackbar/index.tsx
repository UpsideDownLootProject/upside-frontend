import { Snackbar, Alert } from '@mui/material';

type SnackbarProps = {
    message: string,
    show: boolean,
    success: boolean,
    onClose: () => void
}

const SnackbarMessage = ({ message, show, success, onClose }: SnackbarProps) => {
    return (
        <Snackbar
            open={show}
            autoHideDuration={6000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            style={{ maxWidth: "95%" }}
        >
            {success ?
                <Alert onClose={onClose} severity="success" className='snack-personal'>{message}</Alert>
                :
                <Alert onClose={onClose} severity="error" className='snack-personal'>{message}</Alert>}
        </Snackbar>
    )
}

export default SnackbarMessage;