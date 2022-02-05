import NextHead from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  url?: string
  ogImage?: string
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  url,
  ogImage
}) => {
  const joinedTitle = title
    ? `${title} | Haze Monkey Society`
    : 'Welcome to Haze Monkey Society'

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{joinedTitle}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta
        name="keywords"
        content="NFT, Collection, Society, Web3, Monkey, Ape, Dox"
      />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={joinedTitle} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@HazeMonkeyNFT" />
      <meta name="twitter:site" content="@HazeMonkeyNFT" />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#F5EBD3" />
    </NextHead>
  )
}

SEOHead.defaultProps = {
  title: '',
  description: 'The OG Haze Monkey Society The first residence of Hazron.',
  url: 'https://www.hazemonkeysociety.com/',
  ogImage:
    'https://res.cloudinary.com/lab88/image/upload/v1640809390/website/d294ca30-c5c4-406e-9caf-c2ec76f3ca95_uabib1'
}

export default SEOHead
