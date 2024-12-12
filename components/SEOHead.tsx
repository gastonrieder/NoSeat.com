import Head from 'next/head'

interface SEOHeadProps {
    city: string;
    country: string;
    description?: string;
    slug: string;
  }
  
  export const SEOHead = ({ city, country, description, slug }: SEOHeadProps) => (
    <Head>
      <title>{`${city} Public Transport Guide | NoSeat.co`}</title>
      <meta name="description" content={description || `Complete guide to using public transport in ${city}. Fares, routes, and travel tips for getting around ${city}, ${country}.`} />
      <meta name="keywords" content={`${city} transport, ${city} metro, ${city} bus, public transit ${city}, ${city} travel guide`} />
      <link rel="canonical" href={`https://noseat.co/cities/${slug}`} />
      <meta property="og:title" content={`${city} Public Transport Guide`} />
      <meta property="og:description" content={description || `Complete guide to using public transport in ${city}`} />
    </Head>
  )
  
