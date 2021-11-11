import React from 'react';
import { Route, Routes } from 'react-router';


function HomePage(props) {
    return (
        <>
        <h1>first page</h1>
        <div className='HomeContainer'>
            <div id='leftPart'>leftPart</div>
            <div id='rightPart'>rightPar</div>

        </div>
        </>
    );
}

export default HomePage;