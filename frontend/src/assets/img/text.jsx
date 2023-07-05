import React, { useState } from 'react'
import Bathroom from "../../assets/img/icons/bathroom.png"
import exterior from "../../assets/img/icons/exterior.png"
import heating from "../../assets/img/icons/heating.png"
import iconLighting from "../../assets/img/icons/icon-lighting.png"
import keys from "../../assets/img/icons/keys.png"
import walls from "../../assets/img/icons/walls.png"
import kitchen from "../../assets/img/icons/kitchen.png"
import other from "../../assets/img/icons/other.png"

const Step1 = ({ selectedOption }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        console.log("first" , event.target.value)
        const optionValue = event.target.value;
        setSelectedOption(optionValue);
    };

    
    const options = [
        { value: 'bathroom', label: 'Bathroom', image: Bathroom },
        { value: 'exterior', label: 'Exterior', image: exterior },
        { value: 'heating', label: 'Heating', image: heating },
        { value: 'lighting', label: 'Lighting & Electrics', image: iconLighting },
        { value: 'doors', label: 'Doors, Garages & Locks', image: keys },
        { value: 'walls', label: 'Walls, Floors & Ceiling', image: walls },
        { value: 'kitchen', label: 'Kitchen', image: kitchen },
        { value: 'other', label: 'Other', image: other },
    ];
    return (
        <>
            <div className="step">
                <h4>What is the problem?</h4>
                <div className="form-check ps-0 q-box">
                    <div className="row">
                        {options.map((option) => (
                            <div key={option.value} className="col-lg-3">
                                <label className="card p-1 ms-2 form-check-label" htmlFor={option.value}>
                                    <input
                                        type="radio"
                                        id={option.value}
                                        name="option"
                                        value={option.value}
                                        className="form-check-input visually-hidden"
                                        checked={selectedOption === option.value}
                                        onChange={handleOptionChange}
                                    />
                                    <img
                                        src={option.image}
                                        alt={option.label}
                                        className="img-fluid d-block m-auto"
                                        onClick={() => setSelectedOption(option.value)}
                                    />
                                    <h5 className="text-center">{option.label}</h5>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Step1