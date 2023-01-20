import React from 'react'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faLaptopCode, faBriefcase, faPaperPlane, faHamburger } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/js/all'
import { RWebShare } from 'react-web-share'

export default function Header() {
    return (
        <div>
            {/* Modal */}
            <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                {/* Vertically centered scrollable modal */}
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className="modal-title" id="modalLabel">Contact Me</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Email: <span className="email">cindycs212@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* bg transparent - navbar is transparent background color  */}
            {/* navbar light is the hamburger button */}
            <nav className='navbar navbar-expand-lg navbar-light fixed-top' id='header' >
                <div className='container-fluid'>
                    <a type='button' className='navbar-brand' href='#home' id='logo'>
                        <span id='pizza'>🍕</span>
                        {/* <FontAwesomeIcon icon={faHouseChimney} id='homeIcon' /> */}
                        <span id='name'>cindy</span>
                    </a>
                    {/* data toggle automaticall assigns control to the collapse element
                data target connects the toggle button to the collapse id (aka navbarMenu) */}
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarMenu' aria-controls='navbarMenu' aria-expanded='false' aria-label='Toggle navigation'>
                        <FontAwesomeIcon icon={faHamburger} id='hamburger' />
                    </button>
                    <div className='collapse navbar-collapse' id='navbarMenu'>
                        <div className='navbar-nav text-center' >
                            <a className='nav-link active' aria-current='page' href='#home' id='page'>
                                <FontAwesomeIcon icon={faHouseChimney} id='icon' />
                                Home
                            </a>
                            <a className='nav-link' href='#portfolio' id='page'>
                                <FontAwesomeIcon icon={faBriefcase} id='icon' />
                                Portfolio
                            </a>
                            <a className='nav-link' href='#experience' id='page' >
                                <FontAwesomeIcon icon={faLaptopCode} id='icon' />
                                Professional Experience
                            </a>
                            {/* <a className='nav-link' href='#passions' id='page'>
                            <FontAwesomeIcon icon={faPersonSnowboarding} id='icon' />
                            Passions
                        </a> */}
                            {/* Put the < div > that has the modal class outside of the navbar. You can leave the modal-triggering < a > in the navbar. */}
                            <a className='nav-link' href='#' id='page' data-bs-toggle='modal' data-bs-target='#contactModal'>
                                <FontAwesomeIcon icon={faPaperPlane} id='icon' />
                                Contact Me
                            </a>
                            {/* target _blank opens link in new tab */}
                            <a className='nav-link' href='https://github.com/cindycs212' target='_blank' id='mediaId'>
                                <FontAwesomeIcon icon='fa-brands fa-github' />
                                {/* <FontAwesomeIcon icon='fa-brands fa-github-square' /> */}
                            </a>
                            <a className='nav-link' href='https://www.linkedin.com/in/cindyxlong' target='_blank' id='mediaId'>
                                <FontAwesomeIcon icon='fa-brands fa-linkedin' />
                            </a>
                            <a className='nav-link' href='https://twitter.com/cindycs212' target='_blank' id='mediaId'>
                                <FontAwesomeIcon icon='fa-brands fa-twitter' />
                            </a>
                            {/* installed npm react web share */}
                            <RWebShare
                                data={{
                                    text: "Hey! Check out Cindy Long's cool portfolio!",
                                    url: 'https://github.com/cindycs212',
                                    title: "Cindy's Portfolio",
                                }}
                            // onClick={() => console.log('shared successful!')}
                            >
                                {/* <button>Share</button> */}
                                <a className='nav-link' href='#' id='mediaId'>
                                    <FontAwesomeIcon icon="fa-solid fa-share-from-square" />
                                </a>
                            </RWebShare>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}
