import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useCallback } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha'


export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Brendan | iOS Developer</title>
        <meta name="description" content="I'm a mobile developer specializing in developing and designing apps." />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </Head>
      <HCaptcha 
        sitekey='6647e5c5-b442-4cca-9b50-ad5183e5be25'
        onVerify={(token,ekey) => handleVerificationSuccess(token, ekey)}>
      </HCaptcha>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}