import React from 'react';
import database from '../img/database.jpg';
import beauty from '../img/beauty.jpg';
import Star_Wars from '../img/Star_Wars.jpg';
import space_photo from '../img/space_photo.jpg';
import '../css/styles.css';

export default function Main() {
    return (
        <div className="container-fluid">
            <div className="top row ms-5 justify-content-start text-start">
                <div className="text text-white">
                    <h1>
                        <span>Hi</span>
                        <span>,</span><br/>
                        <span>I'm </span>

                        <span>Greg </span>


                        <span>Renfro</span>
                        <span>,</span>
                        <br/>
                        <span>Full </span>
                        <span>Stack </span>

                        <span>Web </span>

                        <span>Developer</span>
                        <span>.</span>
                    </h1>
                    <a href="#footer">Contact Me</a>
                </div>
            </div>
            <div className="container pt-5" id="projects">

                <div className="projects text-start">
                    <h1 className='text-start'>Projects</h1>
                </div>

                <div className="row  pictures-category justify-content-center">


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
                        <a target="blank" href="https://www.beautylacreme.com">
                            <img src={beauty} alt="beauty" className='img-fluid figure-img rounded-3'/>
                        </a>
                        <p className='card-text text-white'>A website that sells teeth and tanning products. Click the image to see how it
                            works.</p>
                        <a target="blank" href="https://github.com/Reticent93/beauty-la-creme"
                           className="btn btn-default">Code
                        </a>
                    </figure>

                    <figure className="col-4 wars">
                        <a target='blank' href="https://infallible-cori-664a05.netlify.app/">
                            <img src={Star_Wars} alt="Star Wars" className='img-fluid figure-img rounded-3'/>
                        </a>
                        <p className='card-text text-white'>This is a React app using the Star Wars API. Click the image
                            to see how it works.</p>
                        <a target="blank" href="https://github.com/Reticent93/star-wars"
                           className="btn btn-default">Code
                        </a>
                    </figure>


                </div>
            </div>
            <div className="skills container pt-5" id="skills">
                <h1 className="text-end w-75">Skills</h1>
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
                            attended at Lambda School where I fell more in love with coding. If you want to succeed as
                            bad as you want to breathe... </p>

                    </div>
                    <div>
                        <img src={space_photo} alt="space" className='float-end w-25'/>
                    </div>
                </div>
            </div>
            {/*<div className='scroll'>*/}
            {/*<a className="text-white-50" href="#navbar">↑</a>*/}
            {/*</div>*/}
        </div>


    );
}
