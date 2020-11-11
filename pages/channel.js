import React from 'react'
import {useRouter} from 'next/router'


export default function channel(props) {



      const {channel,audioClips,series} =props
    return (
        <div>
        <header>Podcasts</header>

    <h1>{channel.title}</h1>
       
        {
      audioClips.map((clip)=>(
        <div key={clip.id}>{clip.title}</div>
      ))
    }
   
       

    <style jsx>{`
        header {
          color: #fff;
          background: #8756ca;
          padding: 15px;
          text-align: center;
        }

        .banner {
          width: 100%;
          padding-bottom: 25%;
          background-position: 50% 50%;
          background-size: cover;
          background-color: #aaa;
        }

        .channels {
          display: grid;
          grid-gap: 15px;
          padding: 15px;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        }
        a.channel {
          display: block;
          margin-bottom: 0.5em;
          color: #333;
          text-decoration: none;
        }
        .channel img {
          border-radius: 3px;
          box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
          width: 100%;
        }
        h1 {
          font-weight: 600;
          padding: 15px;
        }
        h2 {
          padding: 5px;
          font-size: 0.9em;
          font-weight: 600;
          margin: 0;
          text-align: center;
        }

        .podcast {
          display: block;
          text-decoration: none;
          color: #333;
          padding: 15px;
          border-bottom: 1px solid rgba(0,0,0,0.2);
          cursor: pointer;
        }
        .podcast:hover {
          color: #000;
        }
        .podcast h3 {
          margin: 0;
        }
        .podcast .meta {
          color: #666;
          margin-top: 0.5em;
          font-size: 0.8em;
        }
      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
      `}</style>

        </div>
    )


}

export async function getServerSideProps({query}){
    const idChannel = query.id

    const resChannel= await fetch(`https://api.audioboom.com/channels/${idChannel}`)
    const dataChannel = await resChannel.json()
    const channel= await dataChannel.body.channel

    const reqAudios=await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
    const dataAudios = await reqAudios.json()
    const audioClips = await dataAudios.body.audio_clips

    const reqSeries=await fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
    const dataSeries = await reqSeries.json()
    const series = await dataSeries.body.channels


    return { props: {channel,audioClips,series}}
  }


  
