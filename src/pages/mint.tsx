import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import Link from "next/link"
import { Grid, Button, TextField } from '@mui/material'
import SnackbarMessage from '../components/snackbar';

import { Accounts } from '../components/web3Connectors/Accounts';
import ModalConnect from '../components/ModalConnect';
import { useWeb3React } from '@web3-react/core';

import { ownerOf as available, claimForLoot, claim } from '../api/contract';

const Mint: NextPage = () => {

    const { isActive, provider, accounts, ENSNames, connector } = useWeb3React();

    const [showModal, setShowModal] = useState(false);
    const [showSnack, setShowSnack] = useState(false);
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const [isAvailable, setIsAvailable] = useState(false);
    const [showAvailable, setShowAvailable] = useState(false);

    const [tokenId, setTokenId] = useState('');
    const [lootId, setLootId] = useState('');

    const handleAvailable = () => {
        setShowAvailable(false);
        if (tokenId === '') {
            setMessage('Please enter a token id');
            setSuccess(false);
            setShowSnack(true);
            return;
        }
        available(parseFloat(tokenId)).then(() => {
            setShowAvailable(true);
            setIsAvailable(false);
        }).catch(() => {
            setShowAvailable(true);
            setIsAvailable(true);
        });
    }

    const handleClaim = () => {
        claim(provider, parseFloat(tokenId)).then(() => {
            setShowSnack(true);
            setSuccess(true);
            setMessage('You have correctly claimed the Upside Down Loot #' + tokenId);
        }).catch(e => {
            if (e.error && e.error.data && e.error.data.message) {
                setMessage(e.error.data.message);
            } else {
                setMessage(e.message);
            }
            setShowSnack(true);
            setSuccess(false);
        });
    }

    const handleClaimForLoot = () => {
        claimForLoot(provider, parseFloat(tokenId), parseFloat(lootId)).then(() => {
            setShowSnack(true);
            setSuccess(true);
            setMessage('You have correctly claimed the Upside Down Loot #' + tokenId);
        }).catch(e => {
            if (e.error && e.error.data && e.error.data.message) {
                setMessage(e.error.data.message);
            } else {
                setMessage(e.message);
            }
            setShowSnack(true);
            setSuccess(false);
        });
    }

    useEffect(() => {
        if (isActive) {
            setShowModal(false)
        }
    }, [isActive])

    return (
        <div className="container">

            <main className="main">
                <h1>
                    Mint an Upside Down Loot
                </h1>

                <p>
                    <Link color="inherit" href="https://opensea.io/collection/upside-down-loot">
                        view contract
                    </Link>
                </p>

                {isActive ? (
                    <Accounts
                        connector={connector}
                        accounts={accounts}
                        ENSNames={ENSNames}
                    />
                ) : (
                    <Button className="connect-wallet" variant="contained" color="inherit" onClick={() => setShowModal(true)}>
                        Connect Wallet
                    </Button>
                )}

                <div className='mint'>
                    <h3>
                        Check if the Token id you want is available
                    </h3>
                    <div>
                        <TextField
                            type="number"
                            id="outlined-number"
                            label="Token id"
                            style={{ width: '74%' }}
                            onChange={(e) => setTokenId(e.target.value)}
                        />
                        <Button className="check" variant="contained" color="inherit" onClick={handleAvailable}>
                            Check
                        </Button>
                    </div>
                    {!showAvailable ? (
                        <p>
                            Search for a token id to see if it is available
                        </p>
                    ) : isAvailable ? (
                        <p className='text-success'>
                            The token id {tokenId} is available for minting
                        </p>
                    ) : (
                        <p className='text-error'>
                            The token id {tokenId} is not available
                        </p>
                    )}

                    <h2>
                        Mint your Upside Down Loot
                    </h2>
                    <p className="glitch" data-text="If you hold already a Loot enter the id of your Loot. You can claim an Upside Down Loot for free.">
                        If you hold already a Loot enter the id of your Loot. You can claim an Upside Down Loot for free.
                    </p>
                    <p className="glitch" data-text="If not you hold already a Loot or you want to mint another: the price is 0.025 ETH.">
                        If not you hold already a Loot or you want to mint another: the price is 0.025 ETH.
                    </p>
                    {isActive ? (
                        <Grid container style={{ marginTop: 50 }}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type="number"
                                    id="outlined-number"
                                    label="Your Loot id"
                                    style={{ width: '90%', marginBottom: 10 }}
                                    onChange={(e) => setLootId(e.target.value)}
                                />
                                <TextField
                                    type="number"
                                    id="outlined-number"
                                    label="Upside Down Loot Token id"
                                    style={{ width: '90%' }}
                                    onChange={(e) => setTokenId(e.target.value)}
                                />
                                <Button className="mint-button" variant="contained" color="inherit" onClick={handleClaimForLoot}>
                                    Mint for Loot
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type="number"
                                    id="outlined-number"
                                    label="Upside Down Loot Token id"
                                    style={{ width: '90%' }}
                                    onChange={(e) => setTokenId(e.target.value)}
                                />
                                <Button className="mint-button" variant="contained" color="inherit" onClick={handleClaim}>
                                    Mint for 0.025 ETH
                                </Button>
                            </Grid>
                        </Grid>
                    ) : (
                        <div style={{ textAlign: "center" }}>
                            <Button className="connect-wallet" variant="contained" color="inherit" onClick={() => setShowModal(true)}>
                                Connect Wallet
                            </Button>
                        </div>
                    )}

                </div>

                <ModalConnect
                    show={showModal}
                    onClose={() => setShowModal(false)}
                />

                <SnackbarMessage
                    message={message}
                    show={showSnack}
                    success={success}
                    onClose={() => setShowSnack(false)}
                />

            </main >
        </div >
    )
}

export default Mint
