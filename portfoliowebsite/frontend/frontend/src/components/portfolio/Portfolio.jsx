import React from 'react'
import './portfolio.scss'
import { projects } from '../../dataProjects.jsx'
// You can leave off the curly braces only for the default function from a module/package
import { useState, useEffect } from 'react'

export default function Portfolio() {
    // use project title, img, desc from data file
    // setState and useEffect can only be used in function components
    const [data, setData] = useState([]);
    useEffect(() => { setData(projects) });
    // set data for modal
    const [project, setProject] = useState([]);
    // Never setState inside render. It will make your app crash
    return (
        <div className='container-fluid' id='portfolio'>
            <div className='row'>
                <div className='col-1 container' id='titleContainer'>
                    <h2 id='title'>Check Out My Projects</h2>
                </div>
                <div className='col-lg-9 col-sm-11 container' id='projectsContainer'>
                    {data.map((d) => (
                        // Implementing modal here would only show the last index desc because when you click on the loop is already run when you click on button 
                        // its rendering the last item data. Better approach would be do not render modal on each loop approach instead it should 
                        //render on Porfolio Level Component
                        <li className='col-lg-4 col-md-6 col-sm-12' key={d.id}>
                            {/* on click set project so that the clicked project is passed to show in modal which is outside the map function */}
                            <div className='project' id='project' data-bs-toggle='modal' data-bs-target='#myWebModal' onClick={() => setProject(d)}>
                                <img src={d.img} alt='image' className='projImage img-fluid' />
                                <h4>{d.id}</h4>
                                <h3>{d.title}</h3>
                            </div>

                        </li>
                    ))}
                    {/* Modal */}
                    <div className="modal fade" id="myWebModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                        {/* Vertically centered scrollable modal */}
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header border-0">
                                    <h5 className="modal-title" id="modalLabel">{project.title}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {project.desc}
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}
