import React from 'react';
import Head from 'next/head';
import Header from '../components/Header'

const Layout = ({children}) => {

    return (
        <>
        <Head>
            <title>GitHub Search - App</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/litera/bootstrap.min.css"/>
            <link href="/static/styles.css" rel="stylesheet" />
        </Head>

        <div className="team-boxed">
            <Header />
            <div class="container">
            {children}
            </div>
        </div>
        
        
        </>


    )
}

export default Layout;
