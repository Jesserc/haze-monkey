import type { NextPage } from 'next'
import About from '../components/landingpage/about/about'
import Hero from '../components/landingpage/hero'
import Roadmap from '../components/landingpage/roadmap/roadmaps'
import Team from '../components/landingpage/team/team2'
import SEOHead from '../components/SEOHead/SEOHead'

const Home: NextPage = () => {
  return (
    <>
      <SEOHead />
      <main>
        <Hero />
        <About />
        <Roadmap />
        <Team />
      </main>
    </>
  )
}

export default Home
