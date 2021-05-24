import React from 'react';
import database from '../img/database.jpg';
import game_of_life from '../img/game_of_life.jpg';
import Star_Wars from '../img/Star_Wars.jpg';
import smurf from '../img/smurf.jpg';
import '../css/styles.css';

export default function Main() {
    return (
        <div className="container-fluid">
            <div className="row ms-5 justify-content-start text-start">
                <div className="text text-white">
                    <h1>
                        <span>H</span>
                        <span>i</span>
                        <span>,</span><br/>
                        <span>I</span>

                        <span>'</span>
                        <span>m </span>

                        <span>G</span>
                        <span>r</span>
                        <span>e</span>
                        <span>g </span>

                        <span>R</span>
                        <span>e</span>
                        <span>n</span>
                        <span>f</span>
                        <span>r</span>
                        <span>o</span>
                        <br/>
                        <span>F</span>
                        <span>u</span>
                        <span>l</span>
                        <span>l </span>
                        <span>S</span>
                        <span>t</span>
                        <span>a</span>
                        <span>c</span>
                        <span>k </span>

                        <span>W</span>
                        <span>e</span>
                        <span>b </span>

                        <span>D</span>
                        <span>e</span>
                        <span>v</span>
                        <span>e</span>
                        <span>l</span>
                        <span>o</span>
                        <span>p</span>
                        <span>e</span>
                        <span>r</span>
                        <span>.</span>
                    </h1>
                    <a href="#footer">Contact Me</a>
                </div>
            </div>
            <div className="container pt-5" id="projects">

                <div className="projects text-start">
                    <h1 className='text-start'>Projects</h1>
                </div>

                <div className="row  pictures-category">


                    <figure className="col-4 auth">
                        <a href="authentication">
                            <img src={database} alt="authentication"
                                 className='img-fluid figure-img rounded-3'/>
                        </a>
                        <p className='card-text text-white'>This is about backend authentication using Node.js and
                            Express.</p>
                        <a target="blank" href="https://github.com/Reticent93/Sprint-Challenge-Authentication"
                           className="btn btn-default">Code
                        </a>
                    </figure>


                    <figure className="col-4 game">
                        <a href="life">
                            <img src={game_of_life} alt="Game of Life" className='img-fluid figure-img rounded-3'/>
                        </a>
                        <p className='card-text text-white'>This is Conway's Game of Life. Click the image to see how it
                            works.</p>
                        <a target="blank" href="https://github.com/Reticent93/CS-Build-Week-1"
                           className="btn btn-default">Code
                        </a>
                    </figure>

                    <div className="w-100"></div>
                    <div className="col-4 wars">
                        <a href="star-wars">
                            <img src={Star_Wars} alt="Star Wars" className='img-fluid figure-img rounded-3'/>
                        </a>
                        <p className='card-text text-white'>This is a React app using the Star Wars API. Click the image
                            to see how it works.</p>
                        <a target="blank" href="https://dazzling-blackwell-59fa62.netlify.app/"
                           className="btn btn-default">Code
                        </a>
                    </div>


                    <figure className="col-4 smurfs">
                        <a href="smurf">
                            <img src={smurf} alt="Smurf" className='img-fluid figure-img rounded-3'/>
                        </a>
                        <p className='card-text text-white'>This is an app using Redux. Click the image to see how it
                            works.</p>
                        <a target="blank" href="https://github.com/Reticent93/Sprint-Challenge-State-Management-Smurfs"
                           className="btn btn-default">Code
                        </a>
                    </figure>


                </div>
            </div>
            <div className="skills container pt-5" id="skills">
                <h1 className="text-center w-75">Skills</h1>
                <div className="skills-info text-start">
                    <h3>Front End:</h3>
                    <p>CSS / Javascript / React / Redux / Bootstrap / LESS</p>
                    <h3>Backend:</h3>
                    <p>Node / Express / SQLite / Jest / Supertest</p>
                    <h3>Other:</h3>
                    <p>Git / GitHub / Heroku / Netlify</p>
                </div>
            </div>
            <div className="container pb-5">
                <div className="row about pt-5" id="about">
                    <h1 className='text-start'>About</h1>
                    <div
                        className="me-info ms-5 col-9 align-self-center justify-content-center bg-dark bg-gradient text-white p-3 shadow-lg">
                        <p>Hello. My name is Greg Renfro and I am a Full Stack Web Developer. I enjoy building
                            websites. I actually got into coding by accident. I was offered a role in a film and
                            my character was an Elon Musk type. From there I was hooked on software coding. In 2019 I
                            started at Lambda School where I fell more in love with coding. If you want to succeed as
                            bad as you want to breathe... </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
