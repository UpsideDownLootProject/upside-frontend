import { useCallback, useState } from 'react'
import { Connector } from '@web3-react/types'
import type { Web3ReactHooks } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { WalletConnect } from '@web3-react/walletconnect'
import { CHAINS, getAddChainParameters, /*URLS*/ } from '../../utils/chains'
import { getName } from '../../utils/utils'
// @mui components
import Button from '@mui/material/Button';

export function ChainSelect({
    chainId,
    switchChain,
    displayDefault,
    chainIds,
}: {
    chainId: number
    switchChain: (chainId: number) => void | undefined
    displayDefault: boolean
    chainIds: number[]
}) {
    return (
        <select
            value={chainId}
            onChange={(event) => {
                switchChain?.(Number(event.target.value))
            }}
            disabled={switchChain === undefined}
            className="chain-select"
        >
            {displayDefault ? <option value={-1}>Default Chain</option> : null}
            {chainIds.map((chainId) => (
                <option key={chainId} value={chainId}>
                    {CHAINS[chainId]?.name ?? chainId}
                </option>
            ))}
        </select>
    )
}

export function ConnectWithSelect({
    connector,
    chainId,
    isActivating,
    isActive,
    error,
    setError,
}: {
    connector: MetaMask | WalletConnect | Connector,
    chainId: ReturnType<Web3ReactHooks['useChainId']>
    isActivating: ReturnType<Web3ReactHooks['useIsActivating']>
    isActive: ReturnType<Web3ReactHooks['useIsActive']>
    error: Error | undefined
    setError: (error: Error | undefined) => void
}) {

    //Ethereum chain id
    const desiredChainId = 1

    const onClick = useCallback((): void => {
        setError(undefined)
        if (connector instanceof WalletConnect) {
            connector
                .activate(desiredChainId)
                .then(() => setError(undefined))
                .catch(setError)
        } else if (connector instanceof MetaMask) {
            connector
                .activate(getAddChainParameters(desiredChainId))
                .then(() => setError(undefined))
                .catch(setError)
        } else {
            connector
                .activate(getAddChainParameters(desiredChainId))
        }
    }, [connector, desiredChainId, setError])

    if (error) {
        return (
            <Button
                onClick={onClick}
                className="connect-button"
                variant="contained"
                color="error"
            >
                Try Again?
            </Button>
        )
    } else if (!isActive) {
        return (
            <Button
                onClick={
                    isActivating
                        ? undefined
                        : () =>
                            connector instanceof WalletConnect
                                ? connector
                                    .activate(desiredChainId)
                                    .then(() => setError(undefined))
                                    .catch(setError)
                                : connector instanceof MetaMask ?
                                    connector
                                        .activate(getAddChainParameters(desiredChainId))
                                        .then(() => setError(undefined))
                                        .catch(setError)
                                    : connector
                                        .activate(getAddChainParameters(desiredChainId))
                }
                disabled={isActivating}
                className="connect-button"
                variant="contained"
                color={getName(connector) === 'MetaMask' ? 'warning' : 'primary'}
            >
                {getName(connector)}
            </Button>
        )
    } else {
        return (null);
    }
}