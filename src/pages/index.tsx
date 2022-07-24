import { useState } from 'react';
import type { NextPage } from 'next'
import Link from "next/link"
import { Grid } from '@mui/material'
import Typewriter from 'typewriter-effect';
//Images
import portal from '../assets/images/portal.gif'

const Home: NextPage = () => {

  const [glitch, setGlitch] = useState(false);
  const [backwards, setBackwards] = useState(false);

  return (
    <div className="container">

      <main className="main">
        <h1 className="title">
          Upside Down Loot
        </h1>

        <Grid container spacing={6} className="top-link">
          <Grid item xs={4}>
            <h2>
              <a color="inherit" href="https://opensea.io/collection/upside-down-loot" target="_blank" rel="noreferrer">
                OpenSea
              </a>
            </h2>
          </Grid>
          <Grid item xs={4}>
            <h2>
              <a color="inherit" href="https://twitter.com/UpsideDownLoot" target="_blank" rel="noreferrer">
                Twitter
              </a>{' '}
            </h2>
          </Grid>
          <Grid item xs={4}>
            <h2>
              <Link color="inherit" href="/mint">
                Mint
              </Link>{' '}
            </h2>
          </Grid>
        </Grid>

        <Grid container spacing={0} justifyContent="center" style={{marginTop:150}}>
          <Grid item xs={12} md={8}
            style={{ display: 'flex', alignItems: 'center' }} >
            <div
              style={{
                fontSize: '1.5rem',
              }}
              {...(glitch ? { className: 'glitch' } : {})}
              {...(backwards ? { className: 'backwards' } : {})}
              data-text="Upside Down Loot is identical to Loot except the fact that it's the opposite.
              The laws that rule the elements are symmetrical to the ones that rule in Loot">
              <Typewriter

                options={{
                  delay: 17
                }}

                onInit={(typewriter) => {
                  typewriter.typeString(`Upside Down Loot is identical to Loot except the fact that it's the opposite.
                    The laws that rule the elements are symmetrical to the ones that rule in Loot. ` )
                    .callFunction(() => {
                      setGlitch(true)
                      setTimeout(() => {
                        setBackwards(true);
                      }, 5000);
                    })
                    .start();
                }}


              />
            </div>
          </Grid>
          <Grid item xs={0} md={4}>
            <img src={portal.src} alt="portal_gif" />
          </Grid>
        </Grid>

      </main>
    </div>
  )
}

export default Home
