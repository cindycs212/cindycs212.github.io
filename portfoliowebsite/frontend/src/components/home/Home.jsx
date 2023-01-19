import React from 'react'
import './home.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react';
import Nextpage from '../nextpage/Nextpage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/js/all'
// import photo from './../../assets/myPic2.jpg'
import photo from './../../assets/myPic3.png'

export default function Home() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            strings: ['Python', 'Javascript', 'React', 'Django', 'Material UI', 'Bootstrap']
        })
    })
    return (
        <div className='container-fluid px-0' id='home'>
            <div className='row'>
                <div className='col-md-6 order-2 order-md-1' id='left'>
                    <img src={photo} alt='picture' />
                    {/* <a className='credit' href="https://storyset.com/online">Online illustrations by Storyset</a> */}
                </div>
                <div className='col-md-5 col-sm-11 order-1 order-md-2' id='right'>
                    <div className="backgroundContainer">
                        <div className="introContainer">
                            <h2 id='hello'> <span id='wave'>👋</span> Hi there, I'm </h2>
                            <h2 className='name'>Cindy</h2>
                        </div>
                        <div className="descContainer">
                            <h3><span>Software engineer</span> with experiences in <span id='textRef' ref={textRef}></span></h3>

                            {/* <a href='#portfolio'>
                                <img src='/imgs/down.png' alt='nextpagearrow' />
                            </a> */}
                            <Nextpage page='#portfolio' />
                        </div>
                    </div>
                </div>
                <div className='col-md-1 col-sm-1' id='panel'>
                    {/* <div className='container' id='stack'> */}
                    <FontAwesomeIcon icon='fa-brands fa-python' className='my-4 pt-4' id='' />
                    <FontAwesomeIcon icon='fa-brands fa-react' className='my-4' id='reactIcon' />
                    <FontAwesomeIcon icon='fa-brands fa-js-square' className='my-4' id='' />
                    <FontAwesomeIcon icon='fa-brands fa-bootstrap' className='my-4' id='altIcon' />
                    <FontAwesomeIcon icon='fa-brands fa-html5' className='my-4' id='' />
                    <FontAwesomeIcon icon='fa-brands fa-sass' className='my-4' id='altIcon' />
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}
