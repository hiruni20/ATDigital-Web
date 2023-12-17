import React from 'react';
import './home.css';

function Home() {
  return (
    <div className='min-h-screen flex flex-col items-start lg:px-30 px-5 bg-im1 bg-cover bg-no-repeat bg-center'>
      <div className='min-h-screen flex flex-col items-center justify-center bg-hero-pattern  bg-cover bg-no-repeat bg-center'>
        <div className="md:w-1/2 lg:w-3/4 absolute left-12 bottom-6 flex-col transform max-w-lg bg-white p-4 rounded-lg mb-6 bg-gradient-to-r from-green-500 to-indigo-500">
          <h1 className="text-4xl font-medium font-semi bold mb-3 text-white">
            We Crush Your Competitors, Goals, And Sales Records - Without the B.S.
          </h1>
          <button className="w-full md:w-2/3 lg:w-1/2 bg-orange-500 text-white font-small px-4 py-2 rounded hover:bg-purple cursor-pointer" title='Get free consultation'>
            GET FREE CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;










