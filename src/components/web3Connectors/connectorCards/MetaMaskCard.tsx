import { useEffect, useState } from 'react'
// Connection component for Metamask
import { hooks, metaMask } from '../../../utils/metaMask'
import { ConnectCard } from '../ConnectCard'
// Image 
import image from '../../../assets/images/connectors/MetaMask.svg'


const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export default function MetaMaskCard() {
    const chainId = useChainId()
    const accounts = useAccounts()
    const isActivating = useIsActivating()

    const isActive = useIsActive()

    const provider = useProvider()
    const ENSNames = useENSNames(provider)

    const [error, setError] = useState<Error | undefined>(undefined)

    // attempt to connect eagerly on mount
    useEffect(() => {
        void metaMask.connectEagerly().catch(() => {
            console.debug('Failed to connect eagerly to metamask')
        })
    }, [])

    return (
        <ConnectCard
            connector={metaMask}
            chainId={chainId}
            isActivating={isActivating}
            isActive={isActive}
            error={error}
            setError={setError}
            accounts={accounts}
            provider={provider}
            ENSNames={ENSNames}
            image={image.src}
        />
    )
}