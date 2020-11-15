import Layout from '../components/Layout.jsx'
import ShowChannel from '../components/ShowChannel.jsx'
import React from 'react'



export default function Home(props) {
  

 if(props.error){
  return <div>error:{props.error}</div>
  }else{
  return (
    <Layout title="Podcasts">
    

      <ShowChannel channels={props.channels}/>
      

    </Layout>
    
    )
  }
}
export async function getServerSideProps(){

  try {
    const res= await fetch('https://api.audioboom.com/channels/recommended')
  if (res.status===200 && res.ok===true) {
    const { body: channels} = await res.json()

    return { props: { channels }} 
    
  }else{
    const error=`De canale no Diponible: ${res.status}`
    return {props:{error}}
  }
    
  } catch (err) {
    const error=`informacion no disponible: ${err}`

    return {props:{error}}

  }

}

