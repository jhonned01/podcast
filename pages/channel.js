import React from 'react'
import Link from 'next/link'

export default function channel(props) {



      const {channel,audioClips,series}=props
    return (
      <div>
         <header>Podcasts</header>

        <div className="banner" style={{ backgroundImage: `url(${channel.urls.banner_image.original})` }} />

        <h1>{ channel.title }</h1>

       { series.length > 0 &&
        <div>
          <h2>Series</h2>
          <div className="channels">
            { series.map((serie) => (
              <Link href={`/channel?id=${ serie.id }`} >
                <a className="channel">
                  <h2>{ serie.title }</h2>
                </a>
              </Link>
            ))}
          </div>
        </div>
        }
      
      
      <h2>ultimos Podcasts</h2>
      
        {
      audioClips.map((clip)=>(
        <Link href={`/podcast?id=${clip.id}`} prefetch key={clip.id}>
        <a className='podcast'>
          <h3>{ clip.title }</h3>
          <div className='meta'>
            { Math.ceil(clip.duration / 60) } minutes
          </div>
        </a>
      </Link>
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


    return { props: {channel,audioClips,series}}
  }


  
