import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // TODO: change button hrefs to respective pages
  return (
    <Container maxWidth="lg">
      <section className="body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="md:text-6xl text-2xl mb-4 font-bold">
              Welcome to screenium
            </h1>
            <p className="mb-8 leading-relaxed text-xl">
              Ever wondered who was in a movie? If the tv show your friend
              recommended is any good? With screemdnium, those days are long
              over!
            </p>
            <p className="mb-8 leading-relaxed text-xl">
              But that's not all! Screenium also features a discussion board
              where you can connect and interact with like-minded individuals.
              Share your thoughts and opinions on your favorite movies and
              shows, and discover new ones through the community's
              recommendations.
            </p>
            <div className="flex justify-center">
              <Link to="/login?signup=true">
                <button className="inline-flex text-white bg-main-primary border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded-xl text-lg">
                  Get Started
                </button>
              </Link>
              <Link to="/login">
                <button className="ml-4 inline-flex text-black bg-main-secondary border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded-xl text-lg">
                  Login
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-xl pointer-events-none"
              alt="hero"
              loading="lazy"
              src="/assets/landing-page-1.png"
            />
          </div>
        </div>
      </section>

      {/* <section className=''>
        <h1 className='text-4xl font-bold text-center p-8'>Featured in</h1>
        <div className='grid grid-cols-5 gap-x-10'>
          <img className='pointer-events-none' src='/assets/forbes-logo.png' loading='lazy' alt="forbes logo" />
          <img className='pointer-events-none' src='/assets/nyt-logo.png' loading='lazy' alt="new york times logo" />
          <img className='pointer-events-none' src='/assets/business-insider-logo.png' loading='lazy' alt="business insider logo" />
          <img className='pointer-events-none' src='/assets/washington-post-logo.png' loading='lazy' alt="washington post logo" />
          <img className='pointer-events-none ml-4' src='/assets/reddit-logo.png' loading='lazy' alt="reddit logo" />
        </div>
      </section> */}

      <section className="body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="md:text-6xl text-2xl mb-4 font-bold">
              Explore the latest and greatest in entertainment
            </h1>
            <p className="mb-8 leading-relaxed text-xl">
              Everything you need to know about your favourite movies and tv
              shows can be found here!
            </p>
            <div className="flex justify-center">
              <Link to="/explore">
                <button className="inline-flex text-white bg-main-primary border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded-xl text-lg">
                  Start Exploring
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-xl pointer-events-none"
              alt="movie posters collage"
              loading="lazy"
              src="/assets/posters.png"
            />
          </div>
        </div>
      </section>

      <section className="body-font">
        <h1 className="md:text-6xl text-2xl mb-4 font-bold text-center">
          Create Your List and Join the Community
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div className="flex flex-col items-center">
            <img
              className=" object-cover object-center rounded-xl pointer-events-none"
              alt="list one"
              loading="lazy"
              src="/assets/list1.png"
            />
            <p className="mb-3 leading-relaxed text-md text-center">
              Create your personalized list from tens of thousands of titles
              from The Movie Database API.
            </p>
            <a
              href="https://www.themoviedb.org/?language=en-CA"
              target="_blank"
              className="inline-flex text-white bg-main-primary border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded-xl text-lg"
            >
              Visit TMDB &rarr;
            </a>
          </div>
          <div className="flex flex-col items-center">
            <img
              className=" object-cover object-center rounded-xl pointer-events-none"
              alt="list two"
              loading="lazy"
              src="/assets/list2.png"
            />
            <p className="mb-3 leading-relaxed text-md text-center">
              Use your list to organize and track what titles you’ve completed,
              your current progress, what you plan to watch and so much more.
            </p>
            <Link to="/profile">
              <button className="inline-flex text-white bg-main-primary border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded-xl text-lg">
                Visit Your List &rarr;
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <img
              className=" object-cover object-center rounded-xl pointer-events-none"
              alt="list three"
              loading="lazy"
              src="/assets/list3.png"
            />
            <p className="mb-3 leading-relaxed text-md text-center">
              Our forums are the best place to discuss your favorite movies & TV
              shows and keep up to date with the latest in news.
            </p>
            <Link to="/forums">
              <button className="inline-flex text-white bg-main-primary border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded-xl text-lg">
                Visit the Forums &rarr;
              </button>
            </Link>
          </div>
        </div>

        <div className="pb-40">
          <h1 className="mt-15 md:text-3xl text-xl italic mb-4 font-light text-center">
            This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </h1>
        </div>
      </section>
    </Container>
  );
};

export default Home;
