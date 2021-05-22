import React from 'react';
import Authentication from '../img/Authentication.jpg';
import game_of_life from '../img/game_of_life.jpg';
import star_wars_api from '../img/star_wars_api.jpg';
import smurf from '../img/smurf.jpg';
import space_photo from '../img/space_photo.jpg';
import '../css/styles.css';

export default function Main() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col text text-white">
                    <h1>
                        <span>H</span>
                        <span>i</span>
                        <span>,</span><br />
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
                        <br />
                        <span>Full Stack Web Developer</span>
                    </h1>
                    <button className="btn btn-default">
                    <a href="#contact">Contact Me</a>
                    </button>
                </div>
            </div>
            <div className="container-projects" id="projects">
                <div className="projects">
                    <h1>Projects</h1>
                </div>
                <div className="pictures-category">
                    <div className="auth">
                        <a href="authentication">
                            <img src={Authentication} alt="authentication" />
                        </a>
                        <p>This is about backend authentication using Node.js and Express.</p>
                        <a target="blank" href="https://github.com/Reticent93/Sprint-Challenge-Authentication">
                            <button className="active">Code</button>
                        </a>
                    </div>
                    <div className="game">
                        <a href="life">
                            <img src={game_of_life} alt="Game of Life" />
                        </a>
                        <p>This is Conway's Game of Life. Click the image to see how it works.</p>
                        <a target="blank" href="https://github.com/Reticent93/CS-Build-Week-1">
                            <button className="active">Code</button>
                        </a>
                    </div>
                    <div className="wars">
                        <a href="star-wars">
                            <img src={star_wars_api} alt="Star Wars" />
                        </a>
                        <p>This is a React app using the Star Wars API. Click the image to see how it works.</p>
                        <a target="blank" href="https://dazzling-blackwell-59fa62.netlify.app/">
                            <button className="active">Code</button>
                        </a>
                    </div>
                    <div className="smurfs">
                        <a href="smurf">
                            <img src={smurf} alt="Smurf" />
                        </a>
                        <p>This is an app using Redux. Click the image to see how it works.</p>
                        <a target="blank" href="https://github.com/Reticent93/Sprint-Challenge-State-Management-Smurfs">
                            <button className="active">Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="skills" id="skills">
                <h1>Skills</h1>
                <div className="skills-info">
                    <h3>Front End:</h3>
                    <p>CSS / Javascript / React / Redux / Bootstrap / LESS</p>
                    <h3>Backend:</h3>
                    <p>Node / Express / SQLite / Jest / Supertest</p>
                    <h3>Other:</h3>
                    <p>Git / GitHub / Heroku / Netlify</p>
                </div>
            </div>
            <div className="about" id="about">
                <h1>About</h1>
                <div className="me-info">
                    <p>
                        Hello. My name is Greg Renfro and I am a Full Stack Web Developer. I enjoy building websites.
                    </p>
                </div>
                <img src={space_photo} alt="Space" />
            </div>
        </div>
    );
}
