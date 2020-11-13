import React from 'react'
import Link from 'next/link'
function ShowChannel(props) {
    

return (
  <>
    <div className="channels">
   
   {
     props.channels.map((channel)=>(
       <Link href={`/channel?id=${channel.id}`}>
       <a className="channel" key={channel.id}>
         <img src={channel.urls.logo_image.original} alt={channel.urls.logo_image.original}/>
         <h2>{channel.title}</h2>          
       </a>
       </Link>
     ))
   }
   </div>



  <style jsx>{`

.channels {
display: grid;
grid-gap: 15px;
padding: 15px;
grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
.channel{
  display: block;
  border-radius; 3px;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
  margin-bottom: 0.5em;
}

.channel img {
  border-radius: 3px;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
  width: 100%;
}

h2 {
padding: 5px;
font-size: 0.9em;
font-weight: 600;
margin: 0;
text-align: center;
}

`}</style>

</>
    )
}

export default ShowChannel
