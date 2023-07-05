import React, { useState } from 'react';
import "./style.css"
import "./bootstrap.min.css";
import Step1 from './steps/Step1';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'lato-font/css/lato-font.css';
import plumber from "../assets/img/pl-2.png";


const index = () => {
    return (
        <>
            <div className="">
                <div className="row g-0 justify-content-center">
                    <div className="col-lg-3 offset-lg-1 mx-0 px-0">
                        <div id="title-container">
                            <img src={plumber} className="covid-image img-fluid rounded-100" />
                            <h2>PropelSoft</h2>
                            <h3>Expert Solutions for All Your Home-related Issues</h3>
                            <p>Efficient and Reliable Home Repair Services to Restore Your Peace of Mind.<br />Trust our skilled professionals to fix any home-related problem swiftly and effectively.</p>
                        </div>
                    </div>
                    <div className="col-lg-9 mx-0 px-0">
                        <Step1 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default index