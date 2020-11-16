import React from 'react'
import Link from 'next/link'

function ShowPodcast(props) {
    return (
        <div>
            <div className="banner" style={{ backgroundImage: `url(${props.channel.urls.banner_image.original})` }} />

            <h1>{ props.channel.title }</h1>

            { props.series.length > 0 &&
            <div>
            <h2>Series</h2>
            <div className="channels">
                { props.series.map((serie) => (
                <Link key={serie.id} href={`/channel?id=${ serie.id }`} >
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
            props.audioClips.map((clip)=>(
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
background: #6441A5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2a0845, #6441A5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2a0845, #6441A5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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

export default ShowPodcast;