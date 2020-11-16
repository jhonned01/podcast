import React from 'react'

import Layout from '../components/Layout.jsx'
import ShowPodcast from '../components/ShowPodcast.jsx'
import Error from 'next/error'

export default function channel(props) {

      const {channel,audioClips,series,error}=props
    if (error) {
      
      return <Error statusCode={error}/>
    }else{

    return (
      <Layout title={channel.title}>

        <ShowPodcast channel={channel} audioClips={audioClips} series={series}/>
      </Layout>
    )
    }



}

export async function getServerSideProps({query}){
    const idChannel = query.id
  try {
    const [resChannel,reqAudios,reqSeries]= await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
    ])
 

    const dataChannel = await resChannel.json()
    const channel= await dataChannel.body.channel

    const dataAudios = await reqAudios.json()
    const audioClips = await dataAudios.body.audio_clips

    const dataSeries = await reqSeries.json()
    const series = await dataSeries.body.channels


    return { props: {channel,audioClips,series,error:null}}
    
  } catch (error) {
    const err=`${error}`
    return { props: {channel:null,audioClips:null,series:null, error:err}}
    
  }
    
  }
  
