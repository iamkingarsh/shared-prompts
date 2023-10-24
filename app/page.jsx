import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Welcome to
      <br  />
      <span className='orange_gradient text-center'>
        Shared Prompts!
      </span>
    </h1>
    <p className='desc text-center'>
      Discover & Share Prompts AI-Powered Prompts 
    </p>
    <Feed/> 
  </section>
  )
}

export default Home
