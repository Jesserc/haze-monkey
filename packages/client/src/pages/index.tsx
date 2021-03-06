import type { NextPage } from 'next'
import { useState } from 'react'
import About from '../components/landingpage/about/about'
import Faq from '../components/landingpage/accordion/faq'
import Art2 from '../components/landingpage/autoScroll/art2'
import Background from '../components/landingpage/background/background'
import Footer from '../components/landingpage/footer'
import Hero from '../components/landingpage/hero/hero'
import Reward from '../components/landingpage/reward/reward'
import Roadmap from '../components/landingpage/roadmap/roadmaps'
import Team from '../components/landingpage/team/team2'
import SEOHead from '../components/SEOHead/SEOHead'
import TopBar from '../components/landingpage/appNavbar/topbar'
import NavList from '../components/landingpage/appNavbar/navList'

const Home: NextPage = () => {
  const [isClicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!isClicked)
  }

  return (
    <>
      <SEOHead />
      <NavList handleClick={handleClick} isClicked={isClicked} />
      <Hero />
      <About />
      <Background />
      <Art2 />
      <Reward />
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
    </>
  )
}

export default Home
