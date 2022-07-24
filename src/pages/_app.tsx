import { useEffect } from 'react'
import '../assets/styles/globals.css'
import '../assets/styles/index.css'
import '../assets/styles/index.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '../layout/footer'
import Header from '../layout/header'
// Web 3 React 
import { MetaMask } from '@web3-react/metamask'
import { WalletConnect } from '@web3-react/walletconnect'
import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { hooks as hooksMetaMask, metaMask } from '../utils/metaMask';
import { hooks as hooksWalletConnect, walletConnect } from '../utils/walletConnect';

const connectors: [MetaMask | WalletConnect, Web3ReactHooks][] = [
  [metaMask, hooksMetaMask],
  [walletConnect, hooksWalletConnect],
]

function MyApp({ Component, pageProps }: AppProps) {

  // attempt to connect eagerly on mount
  useEffect(() => {
    void metaMask.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to MetaMask')
    })
    walletConnect.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to WalletConnect')
    })
  }, [])

  return (
    <Web3ReactProvider connectors={connectors}>
      <Head>
        <link rel="icon" sizes="16x16" href="/favicon.png" />
        <title>Upside Down</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta property="og:image" content="/favicon.png" />
        <meta name="description" content="The Upside Down is an alternate dimension existing in parallel to the human world." />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Web3ReactProvider>
  )
}

export default MyApp
