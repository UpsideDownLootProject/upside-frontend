import type { Web3ReactHooks } from '@web3-react/core'

export function Status({
    isActivating,
    error,
}: {
    isActivating: ReturnType<Web3ReactHooks['useIsActivating']>
    error?: Error
}) {
    return (
        <>
            {error ? (
                <div className='error-connect'>
                    {error.name ?? 'Error'} <br />
                    {error.message ? ` ${error.message}` : null}
                </div>
            ) : isActivating ? (
                <div className='waiting-connect'>
                    Connecting...
                </div>
            ) : null
            }
        </>
    )
}