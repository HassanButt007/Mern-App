import React, { useState, useEffect } from 'react'
import Bathroom from "../../assets/img/icons/bathroom.png"
import exterior from "../../assets/img/icons/exterior.png"
import heating from "../../assets/img/icons/heating.png"
import iconLighting from "../../assets/img/icons/icon-lighting.png"
import keys from "../../assets/img/icons/keys.png"
import walls from "../../assets/img/icons/walls.png"
import kitchen from "../../assets/img/icons/kitchen.png"
import other from "../../assets/img/icons/other.png";
import { Modal, Button } from 'react-bootstrap';
import 'lato-font/css/lato-font.css';
import axios from 'axios';
import Arrow from "../../assets/img/arrow.png";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import CheckImg from "../../assets/img/check.png"


//Ketchen
import appliances from "../../assets/img/icons/kitchen/appliances.png";
import extractor from "../../assets/img/icons/kitchen/extractor.png";
import flooring from "../../assets/img/icons/kitchen/flooring.png";
import hob from "../../assets/img/icons/kitchen/hob.png";
import microwave from "../../assets/img/icons/kitchen/microwave.png";
import oven from "../../assets/img/icons/kitchen/oven.png";
import sinksandtaps from "../../assets/img/icons/kitchen/sinksandtaps.png";
import units from "../../assets/img/icons/kitchen/units.png";


//Bathroom
import basin from "../../assets/img/icons/bathroom/basin.png";
import bath from "../../assets/img/icons/bathroom/bath.png";
import bathroomB from "../../assets/img/icons/bathroom/bathroom.png";
import toilet from "../../assets/img/icons/bathroom/toilet.png";

//Heating
import boiler from "../../assets/img/icons/heating/boiler.png";
import heatingH from "../../assets/img/icons/heating/heating.png";
import hotwatertank from "../../assets/img/icons/heating/hotwatertank.png";

//Garden
import exteriorG from "../../assets/img/icons/garden/exterior.png";
import windows from "../../assets/img/icons/garden/windows.png";
import chimney from "../../assets/img/icons/garden/chimney.png";
import roofing from "../../assets/img/icons/garden/roofing.png";
import guttering from "../../assets/img/icons/garden/guttering.png";

//Walls
import ceiling from "../../assets/img/icons/wall/ceiling.png";

//Door
import doors from "../../assets/img/icons/door/doors.png";
import locks from "../../assets/img/icons/door/locks.png";
import garage from "../../assets/img/icons/door/garage.png";


//Lighting
import sockets from "../../assets/img/icons/light/sockets.png";
import lightswitches from "../../assets/img/icons/light/lightswitches.png";
import lightfitting from "../../assets/img/icons/light/lightfitting.png";



const Step1 = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        additionalInfo: '',
        selectedOption: '',
        selectedOption2: '',
        image: [],
    });

    // ======== Handle Images and Previews Start =========
    const [images, setImages] = useState([]);
    const handleMultipleImages = (evnt) => {
        const selectedFiles = evnt.target.files;
        const selectedFileCount = selectedFiles.length;
        const maxUploadLimit = 5;
        const maxImageSizeInBytes = 1242880;

        const validFiles = [];

        for (let i = 0; i < selectedFileCount; i++) {
            const file = selectedFiles[i];
            const fileSizeInBytes = file.size;

            if (fileSizeInBytes > maxImageSizeInBytes) {
                alert(`The file "${file.name}" exceeds the maximum image size of 1MB.`);
                return;
            }

            validFiles.push(file);
        }

        const selectedFilesArray = Array.from(validFiles);
        setFormData({ ...formData, image: selectedFilesArray });
        setImages(selectedFilesArray);
        console.log("Files", selectedFilesArray);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleOptionSelect = (optionValue) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            selectedOption: optionValue,
        }));
    };

    const handleOptionSelect2 = (optionValue) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            selectedOption2: optionValue,
        }));
    };

    const handleNext = () => {
        if (currentStep === 1 && selectedOption === "other") {
            setCurrentStep(3);
        } else {
            setCurrentStep(currentStep + 1);
        }
        return;
        const updatedFormData = {
            ...formData,
            selectedOption: selectedOption,
            selectedOption2: selectedOption2,
        };
        console.log(updatedFormData);
    };

    const handlePrev = () => {
        if (currentStep === 3 && selectedOption === 'other') {
            setCurrentStep(1);
        } else {
            setCurrentStep(currentStep - 1);
        }
    };


    const options = [
        { value: 'bathroom', label: 'Bathroom', image: Bathroom },
        { value: 'exterior', label: 'exterior', image: exterior },
        { value: 'heating', label: 'heating', image: heating },
        { value: 'lighting', label: 'Lighting & Electrics', image: iconLighting },
        { value: 'Locks', label: 'Doors, Garages & Locks', image: keys },
        { value: 'walls', label: 'Walls, Floors & Ceiling', image: walls },
        { value: 'kitchen', label: 'Kitchen', image: kitchen },
        { value: 'other', label: 'Other', image: other },
    ];

    const kitchenOptions = [
        { value: 'appliances', label: 'appliances', image: appliances },
        { value: 'extractor', label: 'extractor', image: extractor },
        { value: 'flooring', label: 'flooring', image: flooring },
        { value: 'hob', label: 'hob', image: hob },
        { value: 'microwave', label: 'microwave', image: microwave },
        { value: 'oven', label: 'oven', image: oven },
        { value: 'sinksandtaps', label: 'sinksandtaps', image: sinksandtaps },
        { value: 'units', label: 'units', image: units },
        { value: 'other', label: 'other', image: other },
    ];

    const heatingOptions = [
        { value: 'boiler', label: 'boiler', image: boiler },
        { value: 'heatingH', label: 'heatingH', image: heatingH },
        { value: 'hotwatertank', label: 'hotwatertank', image: hotwatertank },
        { value: 'other', label: 'other', image: other },
    ];

    const bathroomOptions = [
        { value: 'basin', label: 'basin', image: basin },
        { value: 'extractor', label: 'extractor', image: extractor },
        { value: 'bath', label: 'bath', image: bath },
        { value: 'bathroomB', label: 'bathroomB', image: bathroomB },
        { value: 'toilet', label: 'toilet', image: toilet },
        { value: 'other', label: 'other', image: other },
    ];

    const gardenOptions = [
        { value: 'exterior', label: 'exterior', image: exteriorG },
        { value: 'windows', label: 'windows', image: windows },
        { value: 'chimney', label: 'chimney', image: chimney },
        { value: 'roofing', label: 'roofing', image: roofing },
        { value: 'guttering', label: 'guttering', image: guttering },
        { value: 'other', label: 'other', image: other },
    ];

    const wallsOptions = [
        { value: 'ceiling', label: 'ceiling', image: ceiling },
        { value: 'walls', label: 'Walls, Floors & Ceiling', image: walls },
        { value: 'flooring', label: 'flooring', image: flooring },
        { value: 'other', label: 'other', image: other },
    ];

    const doorOptions = [
        { value: 'doors', label: 'doors, Garages & Locks', image: doors },
        { value: 'locks', label: 'locks', image: locks },
        { value: 'garage', label: 'garage', image: garage },
        { value: 'other', label: 'other', image: other },
        { value: 'keys', label: 'Doors, Garages & Locks', image: keys },
    ];

    const lightOptions = [
        { value: 'sockets', label: 'sockets', image: sockets },
        { value: 'lightswitches', label: 'lightswitches', image: lightswitches },
        { value: 'lightfitting', label: 'lightfitting', image: lightfitting },
        { value: 'other', label: 'other', image: other },
    ];


    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = import.meta.env.VITE_API_URL + `/formData/new`;
            const newData = new FormData();
            newData.append("name", formData.name);
            newData.append("email", formData.email);
            newData.append("phone", formData.phone);
            newData.append("address", formData.address);
            newData.append("additionalInfo", formData.additionalInfo);
            newData.append("selectedOption", formData.selectedOption);
            newData.append("selectedOption2", formData.selectedOption2);
            if (images.length > 0) {
                for (let i = 0; i < images.length; i++) {
                    newData.append("image", images[i]);
                }
            }
            const response = await axios({
                method: "post",
                url: url,
                data: newData,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setSubmitButtonClicked(true);
            if (response?.data.success === true) {
                toast.success(response.data.message);
                console.log('Form submitted successfully');

            } else if (response?.data.success === false) {
                toast.error(response.data.message);
            }
            console.log("response", response)
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };


    useEffect(() => {
        const startModalTimer = () => {
            const timer = setTimeout(() => {
                setShowModal(true);
            }, 500);

            return () => clearTimeout(timer);
        };

        if (submitButtonClicked) {
            startModalTimer();
        }
    }, [submitButtonClicked]);

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (
        <>
            <div id="qbox-container">
                <form className="needs-validation" onSubmit={handleSubmit} encType="multipart/form-data">
                    {currentStep === 1 && (
                        <div className="step">
                            <h1 className='fw-5 purple mb-4'>Please Select the Issue</h1>
                            <div className="form-check ps-0 q-box">
                                <div className="row">
                                    {options.map((option) => (
                                        <div
                                            key={option.value}
                                            className={`card p-1 ms-2 ${formData.selectedOption === option.value ? 'selected' : ''}`}
                                            onClick={() => handleOptionSelect(option.value)}
                                            style={formData.selectedOption === option.value ? { border: '2px solid #0a80ea' } : {}}
                                        >
                                            <img src={option.image} alt={option.label} className="img-fluid d-block m-auto" />
                                            <h5 className="text-center">{option.label}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button id="next-btn" type="button" onClick={handleNext} disabled={!formData.selectedOption}>
                                Next
                            </button>
                        </div>
                    )}

                    {currentStep === 2 && formData.selectedOption === 'kitchen' && (
                        <div className="step">
                            <h4>Kitchen</h4>
                            <div className="form-check ps-0 q-box">
                                <div className="row">
                                    {kitchenOptions.map((option) => (
                                        <div
                                            key={option.value}
                                            className={`card p-1 ms-2 ${formData.selectedOption2 === option.value ? 'selected' : ''}`}
                                            onClick={() => handleOptionSelect2(option.value)}
                                            style={formData.selectedOption2 === option.value ? { border: '2px solid #0a80ea' } : {}}
                                        >
                                            <img src={option.image} alt={option.label} className="img-fluid d-block m-auto" />
                                            <h5 className="text-center">{option.label}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button id="prev-btn" type="button" onClick={handlePrev}>
                                Previous
                            </button>
                            <button id="next-btn" type="button" onClick={handleNext} disabled={!formData.selectedOption}>
                                Next
                            </button>
                        </div>
                    )}

                    {currentStep === 2 && formData.selectedOption === 'bathroom' && (
                        <div className="step">
                            <h4>Bathroom</h4>
                            <div className="form-check ps-0 q-box">
                                <div className="row">
                                    {bathroomOptions.map((option) => (
                                        <div
                                            key={option.value}
                                            className={`card p-1 ms-2 ${formData.selectedOption2 === option.value ? 'selected' : ''}`}
                                            onClick={() => handleOptionSelect2(option.value)}
                                            style={formData.selectedOption2 === option.value ? { border: '2px solid #0a80ea' } : {}}
                                        >
                                            <img src={option.image} alt={option.label} className="img-fluid d-block m-auto" />
                                            <h5 className="text-center">{option.label}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Render Step 3 content */}
                            <button id="prev-btn" type="button" onClick={handlePrev}>
                                Previous
                            </button>
                            <button id="next-btn" type="button" onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    )}

                    {currentStep === 2 && formData.selectedOption === 'heating' && (
                        <div className="step">
                            <h4>Heating</h4>
                            <div className="form-check ps-0 q-box">
                                <div className="row">
                                    {heatingOptions.map((option) => (
                                        <div
                                            key={option.value}
                                            className={`card p-1 ms-2 ${formData.selectedOption2 === option.value ? 'selected' : ''}`}
                                            onClick={() => handleOptionSelect2(option.value)}
                                            style={formData.selectedOption2 === option.value ? { border: '2px solid #0a80ea' } : {}}
                                        >
                                            <img src={option.image} alt={option.label} className="img-fluid d-block m-auto" />
                                            <h5 className="text-center">{option.label}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Render Step 3 content */}
                            <button id="prev-btn" type="button" onClick={handlePrev}>
                                Previous
                            </button>
                            <button id="next-btn" type="button" onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    )}

                    {currentStep === 2 && formData.selectedOption === 'exterior' && (
                        <div className="step">
                            <h4> Exterior, Windows & Garden</h4>
                            <div className="form-check ps-0 q-box">
                                <div className="row">
                                    {gardenOptions.map((option) => (
                                        <div
                                            key={option.value}
                                            className={`card p-1 ms-2 ${formData.selectedOption2 === option.value ? 'selected' : ''}`}
                                            onClick={() => handleOptionSelect2(option.value)}
                                            style={formData.selectedOption2 === option.value ? { border: '2px solid #0a80ea' } : {}}
                                        >
                                            <img src={option.image} alt={option.label} className="img-fluid d-block m-auto" />
                                            <h5 className="text-center">{option.label}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Render Step 3 content */}
                            <button id="prev-btn" type="button" onClick={handlePrev}>
                                Previous
                            </button>
                            <button id="next-btn" type="button" onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    )}

                    {currentStep === 2 && formData.selectedOption === 'walls' && (
                        <div className="step">
                            <h4>Walls</h4>
                            <div className="form-check ps-0 q-box">
                                <div className="row">
                                    {wallsOptions.map((option) => (
                                        <div
                                            key={option.value}
                                            className={`card p-1 ms-2 ${formData.selectedOption2 === option.value ? 'selected' : ''}`}
                                            onClick={() => handleOptionSelect2(option.value)}
                                            style={formData.selectedOption2 === option.value ? { border: '2px solid #0a80ea' } : {}}
                                        >
                                            <img src={option.image} alt={option.label} className="img-fluid d-block m-auto" />
                                            <h5 className="text-center">{option.label}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Render Step 3 content */}
                            <button id="prev-btn" type="button" onClick={handlePrev}>
                                Previous
                            </button>
                            <button id="next-btn" type="button" onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    )}

                    {currentStep === 2 && formData.selectedOption === 'Locks' && (
                        <div className="step">
                            <h4>Walls</h4>
                            <div className="form-check ps-0 q-box">
                                <div className="row">
                                    {doorOptions.map((option) => (
                                        <div
                                            key={option.value}
                                            className={`card p-1 ms-2 ${formData.selectedOption2 === option.value ? 'selected' : ''}`}
                                            onClick={() => handleOptionSelect2(option.value)}
                                            style={formData.selectedOption2 === option.value ? { border: '2px solid #0a80ea' } : {}}
                                        >
                                            <img src={option.image} alt={option.label} className="img-fluid d-block m-auto" />
                                            <h5 className="text-center">{option.label}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Render Step 3 content */}
                            <button id="prev-btn" type="button" onClick={handlePrev}>
                                Previous
                            </button>
                            <button id="next-btn" type="button" onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    )}

                    {currentStep === 2 && formData.selectedOption === 'lighting' && (
                        <div className="step">
                            <h4>Walls</h4>
                            <div className="form-check ps-0 q-box">
                                <div className="row">
                                    {lightOptions.map((option) => (
                                        <div
                                            key={option.value}
                                            className={`card p-1 ms-2 ${formData.selectedOption2 === option.value ? 'selected' : ''}`}
                                            onClick={() => handleOptionSelect2(option.value)}
                                            style={formData.selectedOption2 === option.value ? { border: '2px solid #0a80ea' } : {}}
                                        >
                                            <img src={option.image} alt={option.label} className="img-fluid d-block m-auto" />
                                            <h5 className="text-center">{option.label}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Render Step 3 content */}
                            <button id="prev-btn" type="button" onClick={handlePrev}>
                                Previous
                            </button>
                            <button id="next-btn" type="button" onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    )}

                    {currentStep === 2 && formData.selectedOption === 'lighting' && (
                        <div className="step">
                            <h4>Walls</h4>
                            <div className="form-check ps-0 q-box">
                                <div className="row">
                                    {lightOptions.map((option) => (
                                        <div
                                            key={option.value}
                                            className={`card p-1 ms-2 ${formData.selectedOption2 === option.value ? 'selected' : ''}`}
                                            onClick={() => handleOptionSelect2(option.value)}
                                            style={formData.selectedOption2 === option.value ? { border: '2px solid #0a80ea' } : {}}
                                        >
                                            <img src={option.image} alt={option.label} className="img-fluid d-block m-auto" />
                                            <h5 className="text-center">{option.label}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Render Step 3 content */}
                            <button id="prev-btn" type="button" onClick={handlePrev}>
                                Previous
                            </button>
                            <button id="next-btn" type="button" onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="step">

                            <div className="form-check ps-0 q-box">
                                <div className="row">
                                    <div className="mb-3">
                                        <label className="form-label">Additional Information</label>
                                        <textarea className="form-control w-100" rows="5" name="additionalInfo" required value={formData.additionalInfo}
                                            onChange={handleChange}></textarea>
                                    </div>
                                </div>
                            </div>
                            {/* Render Step 3 content */}
                            <button id="prev-btn" type="button" onClick={handlePrev}>
                                Previous
                            </button>
                            <button id="next-btn" type="button" onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="step">
                            <div className="mb-3">
                                <div className="col-md-4">
                                    <div className="admin-field">
                                        <div className="review-drag">
                                            <div className="d-flex">
                                                <img className="SignatureImageSize d-block m-auto" src={Arrow} alt="" />
                                                <span className="text-center greenHeading ms-3 mt-4 fw-bold">Upload</span>
                                            </div>
                                            <input type="file" accept="image/*" name="photos" multiple onChange={handleMultipleImages} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {images.length > 0 && (
                                <div className='container'>
                                    <h5 className="mb-4">Uploaded Images of the Issue</h5>
                                    <div className="row">
                                        {images.map((image, index) => (
                                            <div key={index} className="col-md-3 mb-3">
                                                <div className="">
                                                    <img
                                                        src={URL.createObjectURL(image)}
                                                        className="card-img-top uploaded-image"
                                                        alt={`Uploaded ${index + 1}`}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <button id="prev-btn" type="button" onClick={handlePrev}>
                                Previous
                            </button>
                            <button id="next-btn" type="button" onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    )}

                    {currentStep === 5 && (
                        <div className="step">
                            <div className="form-check ps-0 q-box">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label mt-3 mb-1">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label mt-3 mb-1">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter Email Address"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label mt-3 mb-1">Phone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Phone Number"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label mt-3 mb-1">Property address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Property Address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Render Step 3 content */}
                            <button id="prev-btn" type="button" onClick={handlePrev}>
                                Previous
                            </button>
                            <button id="next-btn" type="button" onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    )}

                    {currentStep === 6 && (
                        <div className="step">
                            <h4>Confirm Your Information</h4>
                            <div className="form-check ps-0 q-box">
                                <div className="table-container">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="text-nowrap align-top" style={{ width: "250px" }}><h6>Problem</h6> </td>
                                                <td className="text-nowrap"><p className='capi'>{formData.selectedOption}, {formData.selectedOption2}</p> </td>
                                            </tr>
                                            <tr>
                                                <td className="text-nowrap align-top" style={{ width: "250px" }}><h6>Additional Information</h6></td>
                                                <td className="text-break"><p>{formData.additionalInfo}</p></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    {images.length > 0 && (
                                        <div className='container'>
                                            <h5 className="mb-4">Uploaded Images of the Issue</h5>
                                            <div className="row">
                                                {images.map((image, index) => (
                                                    <div key={index} className="col-md-3 mb-3">
                                                        <div className="">
                                                            <img
                                                                src={URL.createObjectURL(image)}
                                                                className="card-img-top uploaded-image"
                                                                alt={`Uploaded ${index + 1}`}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <h4 className='mt-4'>Personal Details</h4>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="text-nowrap align-top"><h6>Name</h6> </td>
                                                <td className="text-nowrap"><p className='capi'>{formData.name}</p> </td>
                                            </tr>
                                            <tr>
                                                <td className="text-nowrap align-top"><h6>Property Address</h6></td>
                                                <td className="text-nowrap"><p>{formData.address}</p></td>
                                            </tr>
                                            <tr>
                                                <td className="text-nowrap align-top"><h6>Mobile Number</h6> </td>
                                                <td className="text-nowrap"><p >{formData.phone}</p> </td>
                                            </tr>
                                            <tr>
                                                <td className="text-nowrap align-top"><h6>Email address</h6></td>
                                                <td className="text-nowrap"><p>{formData.email}</p></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <button id="prev-btn" type="button" onClick={handlePrev}>
                                Previous
                            </button>
                            <button id="next-btn" type="submit" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div >
                    )}
                </form >
            </div >

            <div>
                {/* Your other content */}
                {showModal && (
                    <Modal show={showModal} onHide={handleCloseModal}>
                        {/* <Modal.Header closeButton>
                            <Modal.Title>Maintance Form</Modal.Title>
                        </Modal.Header> */}
                        <Modal.Body>
                            <img src={CheckImg} className='d-block m-auto img-fluid' width={200} />
                            <h3 style={{fontWeight:"600", textAlign:"center"}}>Thank you for Reporting an issue!</h3>
                            <p style={{fontWeight:"500", textAlign:"center"}}> Our team will get to you soon!</p>
                            <div className='d-flex justify-content-center'>
                                <Link to="https://propelsoft.co.uk/" className='btn btn-primary d-bock m-auto'>Back to Homepage</Link>
                            </div>

                        </Modal.Body>
                    </Modal>
                )}
            </div>
        </>
    )
}

export default Step1