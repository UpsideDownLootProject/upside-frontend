import type { Web3ReactHooks } from '@web3-react/core'
import type { Connector } from '@web3-react/types'
import type { MetaMask } from '@web3-react/metamask'
import { WalletConnect } from '@web3-react/walletconnect'

import { getAdress } from '../../utils/utils'

import { Button } from '@mui/material'

export function Accounts({
    connector,
    accounts,
    ENSNames,
}: {
    connector: MetaMask | WalletConnect | Connector,
    accounts: ReturnType<Web3ReactHooks['useAccounts']>
    ENSNames: ReturnType<Web3ReactHooks['useENSNames']>
}) {

    if (accounts === undefined) return null

    return (
        <div className="account">
            {accounts.length === 0
                ? 'None'
                : accounts?.map((account, i) => (
                    <Button variant="contained" color="inherit"
                        key={account}
                        onClick={() => {
                            if (connector?.deactivate) {
                                void connector.deactivate()
                            } else {
                                void connector.resetState()
                            }
                        }}
                    >
                        {ENSNames?.[i] ?? getAdress(account)}
                    </Button>
                ))}
        </div >
    )
}