import Head from 'next/head';
import Script from 'next/script';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import React, { useState } from 'react';

function MyComponent() {
  return (
    <div>
      <Head>
        <title>Brendan | iOS Developer</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <meta
          name="description"
          content="I'm a mobile developer specializing in developing and designing apps."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

export default MyComponent;
