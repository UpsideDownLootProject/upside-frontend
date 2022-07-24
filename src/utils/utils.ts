import { MetaMask } from '@web3-react/metamask'
import { WalletConnect } from '@web3-react/walletconnect'
import type { Connector } from '@web3-react/types'

export function getName(connector: Connector) {
  if (connector instanceof MetaMask) return 'MetaMask'
  if (connector instanceof WalletConnect) return 'WalletConnect'
  return 'Unknown'
}

export function getAdress(address: string) {
  return address.substring(0, 6) + '...' + address.substring(address.length - 4)
}