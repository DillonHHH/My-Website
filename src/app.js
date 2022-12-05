import React from 'react';
import './app.css';
import { InfoButtonsGrid } from './containers';
import { githubIcon } from './assets';

const githubLink = 'https://github.com/DillonHHH/My-Website';


const App = () => {

    return (
        <div>
            <div className='infoButtons'>
                <InfoButtonsGrid />
            </div>
            <div className='iconByTextDiv'>
                <a href={githubLink} target="_blank" rel="noopener noreferrer"> <img src={githubIcon} className='icon handshakeIcon' alt='' /></a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className='iconText'> Source Code </a>
            </div>
        </div>
    );
}

export default App
