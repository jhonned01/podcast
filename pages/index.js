import Layout from '../components/Layout.js'
import ShowChannel from '../components/ShowChannel.js'

export default function Home({channels}) {

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
