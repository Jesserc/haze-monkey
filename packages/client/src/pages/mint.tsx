import type { NextPage } from 'next'
import Hero from '../components/landingpage/hero/hero'
import SEOHead from '../components/SEOHead/SEOHead'

const Home: NextPage = () => {
  return (
    <>
      <SEOHead />
      <main>
        <Hero />
      </main>
    </>
  )
}

export default Home
