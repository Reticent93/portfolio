import React from 'react';

function Nav() {
    return (
        <nav className="navbar" id='navbar'>
            <div className="container-fluid d-flex">

            		<span className="navbar-brand text-white-50">
					<h1>Greg Renfro</h1>
		 		</span>
                <div className="row">
                    <div className="col justify-content-end">
                        <a href="#projects" className="nav-link active text-decoration-none text-white-50">
                            <span>Projects</span>
                        </a>
                    </div>
                    <div className="col justify-content-end">
                        <a href="#skills" className="nav-link active text-decoration-none text-white-50">
                            <span>Skills</span>
                        </a>
                    </div>
                    <div className="col justify-content-end">
                        <a href="#about" className="nav-link active text-decoration-none text-white-50">
                            <span>About</span>
                        </a>
                    </div>
                    <div className="col justify-content-end">
                        <a href="#contact" className="nav-link active text-decoration-none text-white-50">
                            <span>Contact</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;