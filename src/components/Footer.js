import React from 'react';

export default function Footer() {
    return (

        <div className='card-footer container-fluid text-start p-5' id='footer'>
            <div className='fs-3 ms-5 text start'>Where's Greg?</div>
            <p className="fs-5 ms-5">
                These are the places where I can be reached. Feel free to contact me.
            </p>
            <a target='blank' href="mailto:greg.renfro@gmail.com" className='ms-5 fs-5 text-white-50 text-decoration-none'><span>greg.renfro93@gmail.com</span></a>
            <a target='blank' href="https://www.linkedin.com/in/gregrenfro/" className="card-link ms-5 fs-5 text-white-50 text-decoration-none"><span>LinkedIn</span></a>
            <a target='blank' href="https://github.com/Reticent93" className="card-link ms-5 fs-5 text-white-50 text-decoration-none"><span>Github</span></a>
            <div className="scroll text-white-50"><a href='#navbar'><span></span><span></span><span></span></a></div>

        </div>

    );
}
