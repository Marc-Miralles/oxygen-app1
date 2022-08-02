import logo from "../img/arrow-converter.png";
import heart from "../img/heart.png";
import xdelete from "../img/xdelete.png";

import React, { useState } from 'react';

function Body() {

    const [inputOption, setInputOption] = useState("");
    const [inputValue, setInputValue] =useState("")

    const saveInputOption = (e) => {
        const option = e.target.value;
        setInputOption(option);
        console.log(inputOption);
    }

    return (
        <body className="body">
            <div className="container">
                <div className="converter">
                    <div className="converter-box">
                        <div className="converter-tittle">
                            <h2>convert</h2>
                        </div>
                        <div className="converter-inputs">
                            <form>
                                <div className="unit-convert">
                                    <select className="inputs" onChange={saveInputOption} id="units" name="units">
                                        <option value="kmtomiles">km → miles</option>
                                        <option value="milestokm">miles → km</option>
                                        <option value="meterstofeets">meters → feets</option>
                                        <option value="feetstometers">feets → meters</option>
                                        <option value="cmtoinches">cm → inches</option>
                                        <option value="inchestocm">inches → cm</option>
                                    </select>
                                    <img src={logo} alt="arrow converter" id="arrow-converter"></img>
                                </div>
                                <div className="cuantity">
                                        <input className="inputs" id="cuantity" type="text">
                                        </input>
                                        <p id="unit">km</p>
                                </div>
                            </form>
                        </div>
                        <div className="save-result">
                            <div id="save-button">
                                <img src={heart} alt="save-icon"/>
                            </div>
                            <div id="result">
                                <p id="number">625.35</p>
                                <p id="unit-result">miles</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>saved</h3>
                    <div className="saved-converts">
                        <div className="one-saved">
                            <p>100 miles → 160 km</p>
                            <div className="xdelete">
                                <img src={xdelete} alt="delete"></img>
                            </div>
                        </div>
                        <div className="one-saved">
                            <p>100 miles → 160 km</p>
                            <div className="xdelete">
                                <img src={xdelete} alt="delete"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Body;