import Head from 'next/head'
import Main  from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import {firestore} from '../firebase/config'
export default function Home() {
  const postData = async data =>{
    const time = Date.now()
    await firestore.collection('info').add({
      ...data, postedOn: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: '2-digit', hour:'2-digit', minute: '2-digit'}).format(time),

    })
  }
  return (
    <>
      <Head>
        <title>Wahab | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact postData={postData}/>
    </>
    )
  }