import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Script from 'next/script'
import React, { useState } from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brendan | iOS Developer</title>
        <meta name="description" content="I'm a mobile developer specializing in developing and designing apps." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}