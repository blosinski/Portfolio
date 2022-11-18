import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Script from 'next/script'
import React, { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
    'g-recaptcha-response': ""
  });
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("{https://getform.io/thank-you}", {
      method: "POST",
      body: formData
    }).then(() => setQuery({ name: "", email: ""}));
  };
  
  return (
    <div>
      <Head>
        <title>Brendan | iOS Developer</title>
        <meta name="description" content="I'm a mobile developer specializing in developing and designing apps." />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />

    <Script

      src="https://www.google.com/recaptcha/api.js?render=6LegW9UiAAAAAOjncHpTnAWfJDULCGeAxINkUn5C"
      onReady={() => {
        grecaptcha.ready(function() {
          grecaptcha.execute('6LegW9UiAAAAAOjncHpTnAWfJDULCGeAxINkUn5C', {action: 'homepage'})
          .then(function(token) {
            setQuery({'g-recaptcha-response': token})
          });
        });
      }}
    />
    
    </div>
    
  )
}