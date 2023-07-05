<div className="">
                <div className="row g-0 justify-content-center">
                    <div className="col-lg-3 offset-lg-1 mx-0 px-0">
                        <div id="title-container">
                            <img src={plumber} className="covid-image img-fluid rounded-100" />
                            <h2>Promptmove</h2>
                            <h3>Expert Solutions for All Your Home-related Issues</h3>
                            <p>Efficient and Reliable Home Repair Services to Restore Your Peace of Mind.<br />Trust our skilled professionals to fix any home-related problem swiftly and effectively.</p>
                        </div>
                    </div>
                    <div className="col-lg-9  mx-0 px-0">
                        <div className="progress">
                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50"
                                className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar"
                                style={{ width: "0%" }}></div>
                        </div>
                        <div id="qbox-container">
                            <form className="needs-validation" id="form-wrapper" method="post" name="form-wrapper" noValidate="">
                                <div id="steps-container">
                                    <div className="step">
                                        <h4>What is the problem? </h4>
                                        <div className="form-check ps-0 q-box">
                                            <div className="row">
                                                <div className="d-flex mb-3">
                                                    <div className="card p-1 ms-2">
                                                        <img src={Bathroom} alt="Bathroom" className="img-fluid d-block m-auto" />
                                                        <h5 className="text-center">Bathroom</h5>
                                                    </div>

                                                    <div className="card p-1 ms-2">
                                                        <img src={exterior} alt="exterior" className="img-fluid d-block m-auto" />
                                                        <h5 className="text-center">Exterior</h5>
                                                    </div>

                                                    <div className="card p-1 ms-2">
                                                        <img src={heating} alt="heating" className="img-fluid d-block m-auto" />
                                                        <h5 className="text-center">Heating</h5>
                                                    </div>

                                                    <div className="card p-1 ms-2">
                                                        <img src={iconLighting} alt="icon-lighting" className="img-fluid d-block m-auto" />
                                                        <h5 className="text-center">Lighting & Electrics</h5>
                                                    </div>

                                                </div>
                                                <div className="d-flex mb-3">
                                                    <div className="card p-1 ms-2">
                                                        <img src={keys} alt="keys" className="img-fluid d-block m-auto" />
                                                        <h5 className="text-center">Doors, Garages & Locks</h5>
                                                    </div>

                                                    <div className="card p-1 ms-2">
                                                        <img src={walls} alt="walls" className="img-fluid d-block m-auto" />
                                                        <h5 className="text-center">Walls, Floors & Ceiling</h5>
                                                    </div>

                                                    <div className="card p-1 ms-2">
                                                        <img src={kitchen} alt="kitchen" className="img-fluid d-block m-auto" />
                                                        <h5 className="text-center">kitchen</h5>
                                                    </div>

                                                    <div className="card p-1 ms-2">
                                                        <img src={other} alt="other" className="img-fluid d-block m-auto" />
                                                        <h5 className="text-center">Other</h5>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="step">
                                        <h4>Are you experiencing a high fever, dry cough, tiredness and loss of taste or smell?
                                        </h4>
                                        <div className="form-check ps-0 q-box">
                                            <div className="q-box__question">
                                                <input className="form-check-input question__input" id="q_2_yes" name="q_2"
                                                    type="radio" value="Yes" />
                                                <label className="form-check-label question__label" htmlFor="q_2_yes">Yes</label>
                                            </div>
                                            <div className="q-box__question">
                                                <input className="form-check-input question__input" id="q_2_no" name="q_2"
                                                    type="radio" value="No" />
                                                <label className="form-check-label question__label" htmlFor="q_2_no">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="step">
                                        <h4>Are you having diarrhoea, stomach pain, conjunctivitis, vomiting and headache?</h4>
                                        <div className="form-check ps-0 q-box">
                                            <div className="q-box__question">
                                                <input className="form-check-input question__input" id="q_3_yes" name="q_3"
                                                    type="radio" value="Yes" />
                                                <label className="form-check-label question__label" htmlFor="q_3_yes">Yes</label>
                                            </div>
                                            <div className="q-box__question">
                                                <input className="form-check-input question__input" id="q_3_no" name="q_3"
                                                    type="radio" value="No" />
                                                <label className="form-check-label question__label" htmlFor="q_3_no">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="step">
                                        <h4>Have you traveled to any of these countries with the highest number of COVID-19
                                            cases in the world for the past 2 weeks?</h4>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-check ps-0 q-box">
                                                    <div className="q-box__question">
                                                        <input className="form-check-input question__input q-checkbox" id="q_4_uk"
                                                            name="q_4" type="checkbox" value="uk" />
                                                        <label className="form-check-label question__label" htmlFor="q_4_uk">UK</label>
                                                    </div>
                                                </div>
                                                <div className="form-check ps-0 q-box">
                                                    <div className="q-box__question">
                                                        <input className="form-check-input question__input" id="q_4_us" name="q_4"
                                                            type="checkbox" value="us" />
                                                        <label className="form-check-label question__label" htmlFor="q_4_us">US</label>
                                                    </div>
                                                </div>
                                                <div className="form-check ps-0 q-box">
                                                    <div className="q-box__question">
                                                        <input className="form-check-input question__input" id="q_4_br" name="q_3"
                                                            type="checkbox" value="br" />
                                                        <label className="form-check-label question__label"
                                                            htmlFor="q_4_br">Brazil</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-check ps-0 q-box">
                                                    <div className="q-box__question">
                                                        <input className="form-check-input question__input" id="q_4_de" name="q_4"
                                                            type="checkbox" value="de" />
                                                        <label className="form-check-label question__label"
                                                            htmlFor="q_4_de">Germany</label>
                                                    </div>
                                                </div>
                                                <div className="form-check ps-0 q-box">
                                                    <div className="q-box__question">
                                                        <input className="form-check-input question__input" id="q_4_in" name="q_4"
                                                            type="checkbox" value="in" />
                                                        <label className="form-check-label question__label"
                                                            htmlFor="q_4_in">India</label>
                                                    </div>
                                                </div>
                                                <div className="form-check ps-0 q-box">
                                                    <div className="q-box__question">
                                                        <input className="form-check-input question__input" id="q_4_eu" name="q_4"
                                                            type="checkbox" value="eu" />
                                                        <label className="form-check-label question__label"
                                                            htmlFor="q_4_eu">Europe</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check ps-0 q-box">
                                                    <div className="q-box__question">
                                                        <input className="form-check-input question__input" id="q_4_none" name="q_4"
                                                            type="checkbox" value="none" />
                                                        <label className="form-check-label question__label" htmlFor="q_4_none">I did not
                                                            travelled to any of these countries</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="step">
                                        <h4>Are you experiencing any of these serious symptoms of COVID-19 below?</h4>
                                        <div className="row">
                                            <div className="form-check ps-0 q-box">
                                                <div className="q-box__question">
                                                    <input className="form-check-input question__input" id="q_5_breathing"
                                                        name="q_5_breathing" type="checkbox" value="breathing" />
                                                    <label className="form-check-label question__label"
                                                        htmlFor="q_5_breathing">Difficulty breathing or shortness of breath</label>
                                                </div>
                                            </div>
                                            <div className="form-check ps-0 q-box">
                                                <div className="q-box__question">
                                                    <input className="form-check-input question__input" id="q_5_chest"
                                                        name="q_5_chest" type="checkbox" value="chest pain" />
                                                    <label className="form-check-label question__label" htmlFor="q_5_chest">Chest pain
                                                        or pressure</label>
                                                </div>
                                            </div>
                                            <div className="form-check ps-0 q-box">
                                                <div className="q-box__question">
                                                    <input className="form-check-input question__input" id="q_5_speech"
                                                        name="q_5_speech" type="checkbox" value="speech problem" />
                                                    <label className="form-check-label question__label" htmlFor="q_5_speech">Loss of
                                                        speech or movement</label>
                                                </div>
                                            </div>
                                            <div className="form-check ps-0 q-box">
                                                <div className="q-box__question">
                                                    <input className="form-check-input question__input" id="q_5_pale"
                                                        name="q_5_pale" type="checkbox" value="pale" />
                                                    <label className="form-check-label question__label" htmlFor="q_5_pale">Pale, gray or
                                                        blue-colored skin, lips or nail beds</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="step">
                                        <h4>Provide us with your personal information</h4>
                                        <div className="mt-1">
                                            <label className="form-label">Complete Name:</label>
                                            <input className="form-control" id="full_name" name="full_name" type="text" />
                                        </div>
                                        <div className="mt-2">
                                            <label className="form-label">Complete Address:</label>
                                            <input className="form-control" id="address" name="address" type="text" />
                                        </div>
                                        <div className="mt-2">
                                            <label className="form-label">Email:</label>
                                            <input className="form-control" id="email" name="email" type="email" />
                                        </div>
                                        <div className="mt-2">
                                            <label className="form-label">Phone / Mobile Number:</label>
                                            <input className="form-control" id="phone" name="phone" type="text" />
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-lg-2 col-md-2 col-3">
                                                <label className="form-label">Age:</label>
                                                <div className="input-container">
                                                    <input className="form-control" id="age" name="age" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div id="input-container">
                                                    <input className="form-check-input" name="gender" type="radio" value="male" />
                                                    <label className="form-check-label radio-lb">Male</label>
                                                    <input className="form-check-input" name="gender" type="radio" value="female" />
                                                    <label className="form-check-label radio-lb">Female</label>
                                                    <input className="form-check-input" name="gender" type="radio"
                                                        value="undefined" />
                                                    <label className="form-check-label radio-lb">Rather not say</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="step">
                                        <div className="mt-1">
                                            <div className="closing-text">
                                                <h4>That's about it! Stay healthy!</h4>
                                                <p>We will assess your information and will let you know soon if you need to get
                                                    tested for COVID-19.</p>
                                                <p>Click on the submit button to continue.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="success">
                                        <div className="mt-5">
                                            <h4>Success! We'll get back to you ASAP!</h4>
                                            <p>Meanwhile, clean your hands often, use soap and water, or an alcohol-based hand
                                                rub, maintain a safe distance from anyone who is coughing or sneezing and always
                                                wear a mask when physical distancing is not possible.</p>
                                            <a className="back-link" href="">Go back from the beginning ➜</a>
                                        </div>
                                    </div>
                                </div>
                                <div id="q-box__buttons">
                                    <button id="prev-btn" type="button">Previous</button>
                                    <button id="next-btn" type="button">Next</button>
                                    <button id="submit-btn" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div id="preloader-wrapper">
                <div id="preloader"></div>
                <div className="preloader-section section-left"></div>
                <div className="preloader-section section-right"></div>
            </div>