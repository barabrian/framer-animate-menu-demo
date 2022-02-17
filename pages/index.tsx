import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next Starter</title>
        <meta name="description" content="Next starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="bg-black text-yellow-50 first-letter:text-3xl">
        Next Starter
      </h1>
    </div>
  )
}

export default Home
