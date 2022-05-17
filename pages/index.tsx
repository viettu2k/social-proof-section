import type { NextPage } from 'next'
import Head from 'next/head'
import { HeaderText } from '../components/HeaderText'
import { StarRating } from '../components/StarRating'
import { Testimonials } from '../components/Testimonials'

const Home: NextPage = () => {
  return (
    <div className="background flex min-h-screen  flex-col items-center bg-gray-100 ">
      <Head>
        <title>Social Proof Section</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-a flex flex-col items-center justify-between px-4 py-2 md:flex-row md:px-24 ">
        <HeaderText />
        <div className="flex flex-col items-center justify-center">
          <StarRating text="Rated 5 Stars in Reviews" />
          <StarRating text="Rated 5 Stars in Report Guru" />
          <StarRating text="Rated 5 Stars in Best Tech" />
        </div>
      </div>
      <Testimonials />
    </div>
  )
}

export default Home
