import React from 'react'
import Link from 'next/link'
import Error from 'next/error'

export default function PodCastPlayer(props) {

  const { clip, onClose } = props
  
  const error= null
  if(error){
    return <Error statusCode={error}/>
    }else{
      return (
          <div>
        <header>Podcasts</header>

        <div className='modal'>
          <div className='clip'>
            <nav>
              { onClose ?
              <a onCLick={onClose}>&lt; Volver</a>
              :
              <Link href={`/channel?id=${clip.channel.id}`}>
                <a className='close'>&lt; Volver</a>
              </Link>
              }
            </nav>

            <picture>
              <div style={{ backgroundImage: `url(${clip.urls.image || clip.channel.urls.logo_image.original})` }} />
            </picture>

            <div className='player'>
              <h3>{ clip.title }</h3>
              <h6>{ clip.channel.title }</h6>
              <audio controls autoPlay={true}>
                <source src={clip.urls.high_mp3} type='audio/mpeg' />
              </audio>
            </div>
          </div>
        </div>

        <style jsx>{`
          nav {
            background: none;
          }
          nav a {
            display: inline-block;
            padding: 15px;
            color: white;
            cursor: pointer;
            text-decoration: none;
          }
          .clip {
            display: flex;
            height: 100%;
            flex-direction: column;
            background: #6441A5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2a0845, #6441A5);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2a0845, #6441A5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

            color: white;
          }
          picture {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1 1;
            flex-direction: column;
            width: auto;
            padding: 10%;
          }
          picture div {
            width: 100%;
            height: 100%;
            background-position: 50% 50%;
            background-size: contain;
            background-repeat: no-repeat;
          }
          .player {
            padding: 30px;
            background: rgba(0,0,0,0.3);
            text-align: center;
          }
          h3 {
            margin: 0;
          }
          h6 {
            margin: 0;
            margin-top: 1em;
          }
          audio {
            margin-top: 2em;
            width: 100%;
          }

          .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99999;
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
  }
