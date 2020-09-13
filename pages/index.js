import React, { useState, useEffect } from 'react'

import Layout from '../components/layout'
import Head from 'next/head'
import Header from '../components/header'
import About from '../components/about'

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>David Byttow</title>
      </Head>
      <div className="page">
        <Header />
        <About />
      </div>
    </Layout>
  )
}

export default Index
