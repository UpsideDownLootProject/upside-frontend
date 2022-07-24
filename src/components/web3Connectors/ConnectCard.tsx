import type { Connector } from '@web3-react/types'
import type { Web3ReactHooks } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { WalletConnect } from '@web3-react/walletconnect'
// Web 3 Components
import { ConnectWithSelect } from './ConnectWithSelect'
import { Status } from './Status'

interface Props {
  connector: MetaMask | WalletConnect | Connector,
  chainId: ReturnType<Web3ReactHooks['useChainId']>
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>
  isActive: ReturnType<Web3ReactHooks['useIsActive']>
  error: Error | undefined
  setError: (error: Error | undefined) => void
  ENSNames: ReturnType<Web3ReactHooks['useENSNames']>
  provider?: ReturnType<Web3ReactHooks['useProvider']>
  accounts?: string[]
  image?: string
}

export function ConnectCard({
  connector,
  chainId,
  isActivating,
  isActive,
  error,
  setError,
  ENSNames,
  accounts,
  image,
}: Props) {
  return (
    <>
      {!isActive ? (
        <div className='connect-logo'>
          <img src={image} alt="Connector Logo" style={{ width: '128px' }} />
        </div>
      ) : null}

      <ConnectWithSelect
        connector={connector}
        chainId={chainId}
        isActivating={isActivating}
        isActive={isActive}
        error={error}
        setError={setError}
      />

      <Status isActivating={isActivating} error={error} />
    </>
  )
}