import Layout from '../components/Layout.jsx'
import ShowChannel from '../components/ShowChannel.jsx'
import React from 'react'
import Error from 'next/error'



export default function Home(props) {
  

 if(props.error){
  return <Error statusCode={props.error}/>
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
    
  }else {
    return { props: { channels:null,error:res.status }} 
  }
    
  } catch (err) {
   const error = `${err}`
    return { props: { channels:null,error }} 

  }

}

