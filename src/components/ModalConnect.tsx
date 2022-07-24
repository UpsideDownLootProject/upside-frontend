import { Modal, Grid, Box } from '@mui/material';
// Web 3 Components
import MetaMaskCard from './web3Connectors/connectorCards/MetaMaskCard';
import WalletConnectCard from './web3Connectors/connectorCards/WalletConnectCard';

type ModalProps = {
    onClose: () => void,
    show: boolean,
};

export default function ModalConnect({ onClose, show }: ModalProps) {
    return (
        <Modal
            open={show}
            onClose={onClose}
        >
            <Box className="modal-connect">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <MetaMaskCard />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <WalletConnectCard />
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}