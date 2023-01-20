import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/js/all'
import './modal.scss'
import thoughts from './assets/thoughts.jpg'
// import dating from './assets/dating.jpg'
// import dogs from './assets/dogs.jpg'
import leafy from './assets/leafy.jpg'
import puppy from './assets/puppy.jpg'
import ideas from './assets/ideas.jpg'
import webGif from './assets/myWebsiteGif.mp4'
import userFeedback from './assets/userFeedback.png'
import goodnews from './assets/goodnews.jpg'
import medicine from './assets/medicine.jpg'

export const projects = [
    {
        id: 1,
        title: 'My Website',
        img: `${thoughts}`, // use string literals because portfolio references this variable with the img variable, js doesn't allow that kind of direct reference 
        demo:
            <div className='embed-responsive embed-responsive-4by3'>
                <iframe className='embed-responsive-item' src={webGif} allowFullScreen></iframe>
            </div>,
        stack:
            <div>
                <FontAwesomeIcon icon="fa-brands fa-js-square" className='mx-1' />
                <FontAwesomeIcon icon="fa-brands fa-react" className='mx-1' />
                <FontAwesomeIcon icon="fa-brands fa-bootstrap" className='mx-1' />
                <FontAwesomeIcon icon="fa-brands fa-sass" className='mx-1' />
                <FontAwesomeIcon icon="fa-brands fa-square-font-awesome-stroke" className='mx-1' />
                {/* <FontAwesomeIcon icon="fa-brands fa-python" className='mx-1' /> */}
                {/* <FontAwesomeIcon icon="fa-brands fa-npm" className='mx-1' /> */}
                {/* <FontAwesomeIcon icon="fa-brands fa-square-font-awesome" className='mx-1' /> */}
            </div>,
        desc:
            <div>
                <h3 id='modalHeading'>Stack</h3>
                <span id='stackDesc'>Javascript </span>
                <span id='stackDesc'>React </span>
                <span id='stackDesc'>Sass </span>
                <span id='stackDesc'>FontAwesome </span>
                {/* <span id='stackDesc'>Python </span> */}
                {/* <span id='stackDesc'>Django </span> */}
                {/* <span id='stackDesc'>Npm </span> */}
                {/* <h3 id='modalHeading'>Source Code</h3> */}
                <br />
                <a type='button' className='btn btn-info text-center my-5' id='githubButton'
                    href='https://github.com/cindycs212' target='_blank' >
                    Source Code
                </a>
            </div>
    },
    {
        id: 2,
        title: 'Health Tracker',
        img: `${medicine}`,
        demo:
            <div className='embed-responsive embed-responsive-4by3'>
                {/* <iframe className='embed-responsive-item' src={webGif} allowFullScreen></iframe> */}
            </div>,
        stack:
            <div>
                <FontAwesomeIcon icon="fa-brands fa-python" className='mx-1' />
                <FontAwesomeIcon icon="fa-brands fa-js-square" className='mx-1' />
                <FontAwesomeIcon icon="fa-brands fa-react" className='mx-1' />
                <FontAwesomeIcon icon="fa-brands fa-bootstrap" className='mx-1' />
                {/* <FontAwesomeIcon icon="fa-brands fa-github" className='mx-1' /> */}
                {/* <FontAwesomeIcon icon="fa-brands fa-github-square" className='mx-1' /> */}
                {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" className='mx-1' /> */}
                {/* <FontAwesomeIcon icon="fa-brands fa-twitter" className='mx-1' /> */}
            </div>,
        desc:
            <div>
                <h3 id='modalHeading'>Stack</h3>
                <span id='stackDesc'>Python </span>
                <span id='stackDesc'>Javascript </span>
                <span id='stackDesc'>React </span>
                <span id='stackDesc'>Redux </span>
                <span id='stackDesc'>Django </span>
                <span id='stackDesc'>Djoser </span>
                <span id='stackDesc'>Cryptography </span>
                <span id='stackDesc'>Bootstrap </span>
                {/* <span id='stackDesc'>Sass </span> */}
                {/* <span id='stackDesc'>Npm </span> */}
                {/* <span id='stackDesc'>FontAwesome </span> */}
                {/* <h3 id='modalHeading'>Source Code</h3> */}
                <br />
                <a type='button' className='btn btn-info text-center my-5' id='githubButton'
                    href='https://github.com/cindycs212' target='_blank' >
                    Source Code
                </a>
            </div>
    },
    {
        id: 3,
        title: 'User Feedback Feature',
        img: `${userFeedback}`,
        demo:
            <img src={userFeedback} style={{width: '700px', height: '400px'}}/>,
        stack:
            <div>
                <FontAwesomeIcon icon="fa-brands fa-js-square" className='mx-1' />
                <FontAwesomeIcon icon="fa-brands fa-react" className='mx-1' />
                <FontAwesomeIcon icon="fa-brands fa-github" className='mx-1' />
                <FontAwesomeIcon icon="fa-regular fa-code-branch" className='mx-1' />
                {/* <FontAwesomeIcon icon="fa-brands fa-css3-alt" className='mx-1' />
                <FontAwesomeIcon icon="fa-brands fa-html5" className='mx-1' />
                <FontAwesomeIcon icon="fa-brands fa-java" className='mx-1' />
                <FontAwesomeIcon icon="fa-brands fa-node-js" className='mx-1' /> */}
            </div>,
        desc:
            <div>
                <h3 id='modalHeading'>Stack</h3>
                <span id='stackDesc'>Javascript </span>
                <span id='stackDesc'>React </span>
                <span id='stackDesc'>Redux </span>
                <span id='stackDesc'>Material UI </span>
                {/* <span id='stackDesc'>Python </span> */}
                {/* <span id='stackDesc'>Django </span> */}
                {/* <span id='stackDesc'>Sass </span> */}
                {/* <span id='stackDesc'>Npm </span> */}
                {/* <span id='stackDesc'>FontAwesome </span> */}
                {/* <h3 id='modalHeading'>Source Code</h3> */}
                <br />
                <a type='button' className='btn btn-info text-center my-5' id='githubButton'
                    href='https://github.com/cindycs212' target='_blank' >
                    Source Code
                </a>
            </div>
    },
    {
        id: 4,
        title: 'WIP',
        img: `${leafy}`,
        demo:
            <img src={goodnews} style={{height: '300px'}}/>,
        stack:
            <div>
                {/* <FontAwesomeIcon icon="fa-brands fa-node" className='mx-1' /> */}
            </div>,
        desc:
            <div>
                {/* <h3 id='modalHeading'>Stack</h3>
                <span id='stackDesc'>Python </span>
                <span id='stackDesc'>Javascript </span>
                <span id='stackDesc'>React </span>
                <span id='stackDesc'>Django </span>
                <span id='stackDesc'>Sass </span>
                <span id='stackDesc'>Npm </span>
                <span id='stackDesc'>FontAwesome </span> */}
                {/* <h3 id='modalHeading'>Source Code</h3> */}
                <br />
                {/* <a type='button' className='btn btn-info text-center my-5' id='githubButton'
                    href='https://github.com/cindycs212' target='_blank' >
                    Source Code
                </a> */}
            </div>
    },
    {
        id: 5,
        title: 'WIP',
        img: `${puppy}`,
        demo:
            <img src={goodnews} style={{height: '300px'}}/>,
        stack:
            <div>
            </div>,
        desc:
            <div>
                {/* <h3 id='modalHeading'>Stack</h3> */}
                <br />
                {/* <a type='button' className='btn btn-info text-center my-5' id='githubButton'
                    href='https://github.com/cindycs212' target='_blank' >
                    Source Code
                </a> */}
            </div>
    },
    {
        id: 6,
        title: 'WIP',
        img: `${ideas}`,
        demo:
            <img src={goodnews} style={{height: '300px'}}/>,
        stack:
            <div>
            </div>,
        desc:
            <div>
                {/* <h3 id='modalHeading'>Stack</h3>*/}
                <br />
                {/* <a type='button' className='btn btn-info text-center my-5' id='githubButton'
                    href='https://github.com/cindycs212' target='_blank' >
                    Source Code
                </a> */}
            </div>
    },
];