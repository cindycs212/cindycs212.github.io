import React from 'react'
import './home.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react';
import Nextpage from '../nextpage/Nextpage';

export default function Home() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            strings: ['Finance', 'Business Strategy', 'Business Operations']
        })
    })
    return (
        <div className='container-fluid px-0' id='home'>
            <div className='row'>
                <div className='col-md-6 order-2 order-md-1' id='left'>
                    <img src="/imgs/insertBlock.svg" alt="" />
                    <a className='credit' href="https://storyset.com/online">Online illustrations by Storyset</a>
                </div>
                <div className='col-md-6 col-sm-12 order-1 order-md-2' id='right'>
                    <div className="backgroundContainer">
                        <div className="introContainer">
                            <h2 id='hello'> <span id='wave'>👋</span> Hi there, I'm </h2>
                            <h2 className='name'>Cindy</h2>
                        </div>
                        <div className="descContainer">
                            <h3><span>Software engineer</span> with experiences in <span ref={textRef}></span></h3>
                            <a href="#portfolio">
                                <img src="/imgs/down.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
