import type { NextPage } from 'next'
import Head from 'next/head'

import { Menu, MenuNoAnimation } from '@cmp'

const Home: NextPage = () => {
  return (
    <div className="grid min-h-full content-center justify-center bg-base-100">
      <Head>
        <title>Framer menu demo</title>
        <meta name="description" content="Next starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid w-full grid-cols-2 gap-10 md:gap-20">
        <div>
          <p className="mb-4">No Animation</p>
          <MenuNoAnimation />
        </div>
        <div>
          <p className="mb-4">Animation</p>
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default Home
