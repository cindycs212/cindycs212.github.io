import React from 'react'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faLaptopCode, faBriefcase, faPersonSnowboarding, faPaperPlane, faHamburger } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/js/all.js'

export default function Header() {
    return (
        <div>
            {/* Modal */}
            <div className="modal fade" id="myWebModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                {/* Vertically centered scrollable modal */}
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className="modal-title" id="modalLabel">Contact Me</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            email
                        </div>
                    </div>
                </div>
            </div>
        // bg transparent - navbar is transparent background color
            // navbar light is the hamburger button
            <nav className='navbar navbar-expand-lg navbar-light fixed-top' id='header' >
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#home' id='logo'>
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
                            <a className='nav-link' href='#contact' id='page' data-bs-toggle='modal' data-bs-target='#myWebModal'>
                                <FontAwesomeIcon icon={faPaperPlane} id='icon' />
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </nav >
        </div>
    )
}
