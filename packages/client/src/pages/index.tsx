import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import About from '../components/landingpage/about/about'
import Faq from '../components/landingpage/accordion/faq'
import Background from '../components/landingpage/background/background'

import Hero from '../components/landingpage/hero'
import Loading from '../components/landingpage/loading/loading'
import Reward from '../components/landingpage/reward/reward'
import Roadmap from '../components/landingpage/roadmap/roadmaps'
import Team from '../components/landingpage/team/team'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HAZED MONKEYS</title>
        <meta name="description" content=" Haze Monkey society" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Background />
        <About />
        <Reward />
        <Roadmap />
        <Team />
        <Faq />
      </main>
    </>
  )
}

export default Home
