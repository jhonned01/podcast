import React from 'react'
// import Link from 'next/link'
// import Error from 'next/error'
import PodCastPlayer from '../components/PodCastPlayer.jsx'
import Layout from '../components/Layout.jsx'

export default function podcast(props) {
 

  const { clip, error } = props
  
  if(error){
    return <Error statusCode={error}/>
    }else{
      return <Layout title={clip.title}>
      <PodCastPlayer clip={ clip }/>
    </Layout>


  //     return (
  }
  }


export async function getServerSideProps({query}){

  try {
    const id = query.id

    const fetchClip = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`)
    if (fetchClip.status===200 && fetchClip.ok===true){
      const clip = (await fetchClip.json()).body.audio_clip
      return {props:{ clip }}

      }else{
       
     return {props:{clip:null,error:res.status}} 
      }
    
  } catch (err) {
    const error=`${err}`

    return {props:{clip:null,error}}  }
    
}

