import { useEffect, useState } from 'react'
// Connection component for WalletConnect
import { URI_AVAILABLE } from '@web3-react/walletconnect'
import { hooks, walletConnect } from '../../../utils/walletConnect'
import { ConnectCard } from '../ConnectCard'
// Image 
import image from '../../../assets/images/connectors/WalletConnect.svg'

const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export default function WalletConnectCard() {
  const chainId = useChainId()
  const accounts = useAccounts()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  const [error, setError] = useState<Error | undefined>(undefined)

  // log URI when available
  useEffect(() => {
    walletConnect.events.on(URI_AVAILABLE, (uri: string) => {
      console.log(`uri: ${uri}`)
    })
  }, [])

  // attempt to connect eagerly on mount
  useEffect(() => {
    walletConnect.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to walletconnect')
    })
  }, [])

  return (
    <ConnectCard
      connector={walletConnect}
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