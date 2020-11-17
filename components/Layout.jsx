import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

function Layout(props) {

    return (
        <div>
            <Head>
                <title>{props.title}</title>

            </Head>
            <header><Link href="/"><a> {props.title}</a></Link></header>
        
            {props.children}

    <style jsx>{`
    header {
        color: #fff;
        background: #6441A5;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #2a0845, #6441A5);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #2a0845, #6441A5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        padding: 15px;
        
        text-align: center;
    }
    .header a{
        color: #fff;
        text-decoration: node ;
    }
    `}</style>

        <style jsx global>{`
            body{
                margin: 0;
                background: white;
                font-family: system-ui;

            }
        `}</style>
        </div>
    )
}

export default Layout;