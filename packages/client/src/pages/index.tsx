import type { NextPage } from 'next'
import About from '../components/landingpage/about/about'
import Faq from '../components/landingpage/accordion/faq'
// import Art1 from '../components/landingpage/autoScroll/art1'
import Art2 from '../components/landingpage/autoScroll/art2'
import Background from '../components/landingpage/background/background'
import Hero from '../components/landingpage/hero/hero'
import Reward from '../components/landingpage/reward/reward'
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
        <Background />
        <Art2 />
        <Reward />
        <Roadmap />
        <Team />
        <Faq />
      </main>
    </>
  )
}

export default Home
