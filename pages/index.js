import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Layout from '../components/Layout.jsx'
import ShowChannel from '../components/ShowChannel.jsx'

export default function Home({channels}) {


console.log('====================================');
console.log(channels);
console.log('====================================');
  return (
  <Layout title="Podcasts">
   

    <ShowChannel channels={channels}/>
    

  </Layout>
  
  )
}

export async function getServerSideProps(){
  const res= await fetch('https://api.audioboom.com/channels/recommended')
  const { body: channels} = await res.json()

  return { props: { channels: channels }}
}
