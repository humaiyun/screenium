import { Container } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Container maxWidth="lg">
      <section className="body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="md:text-6xl text-2xl mb-4 font-bold">
              Welcome to screenium
            </h1>
            <p className="mb-8 leading-relaxed">
              Ever wondered who was in a movie? If the tv show your friend recommended is any good? With screenium, those days are long over!
              </p>
            <p className="mb-8 leading-relaxed">
              But that's not all! Screenium also features a discussion board where you can connect and interact with like-minded individuals. Share your thoughts and opinions on your favorite movies and shows, and discover new ones through the community's recommendations.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-main-primary border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">
                Get Started
              </button>
              <button className="ml-4 inline-flex text-black bg-main-secondary border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Login
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded pointer-events-none" alt="hero" loading='lazy' src="/assets/landing-page-1.png" />
          </div>
        </div>
      </section>

      <section className=''>
        <h1 className='text-4xl font-bold text-center p-8'>Featured in</h1>
        <div className='grid grid-cols-5 gap-x-10'>
          <img className='pointer-events-none' src='/assets/forbes-logo.png' loading='lazy' alt="forbes logo" />
          <img className='pointer-events-none' src='/assets/nyt-logo.png' loading='lazy' alt="new york times logo" />
          <img className='pointer-events-none' src='/assets/business-insider-logo.png' loading='lazy' alt="business insider logo" />
          <img className='pointer-events-none' src='/assets/washington-post-logo.png' loading='lazy' alt="washington post logo" />
          <img className='pointer-events-none ml-4' src='/assets/reddit-logo.png' loading='lazy' alt="reddit logo" />
        </div>
      </section>



    </Container>
  )
}

export default Home