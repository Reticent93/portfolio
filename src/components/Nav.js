import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-light bg-dark" id='navbar'>
            <div className="container-fluid d-flex">

            		<span className="navbar-brand text-white">
					<h1>Greg Renfro</h1>
		 		</span>
                <div className="row">
                    <div className="col justify-content-end">
                        <a href="#projects" className="nav-link active text-decoration-none text-white">
                            <span>Projects</span>
                        </a>
                    </div>
                    <div className="col justify-content-end">
                        <a href="#skills" className="nav-link active text-decoration-none text-white">
                            <span>Skills</span>
                        </a>
                    </div>
                    <div className="col justify-content-end">
                        <a href="#about" className="nav-link active text-decoration-none text-white">
                            <span>About</span>
                        </a>
                    </div>
                    <div className="col justify-content-end">
                        <a href="#contact" className="nav-link active text-decoration-none text-white">
                            <span>Contact</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;