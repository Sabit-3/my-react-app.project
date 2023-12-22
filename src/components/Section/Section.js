import React from 'react';
import "./Section.css";

const Section = (props) => {
    return (
        <div className={props.central}>
            <div className={props.section}>
            {/* <video autoPlay muted loop src='my-react-app/src/assets/bg-vedio.mp4' className='video'></video> */}
            {/* <h1> WELCOME {props.user}</h1> */}
            </div>
        </div>
    )
}

export default Section;
