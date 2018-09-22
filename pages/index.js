import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Link href='/about' replace>
      <a>about</a>
    </Link>{' '}
  </div>
)

export default Home
