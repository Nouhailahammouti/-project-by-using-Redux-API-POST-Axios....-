import React from "react";
import { Link } from "react-router-dom";
import './LaptopDetails.css'

function Menu(){
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/LaptopDetails">LaptopDetails</Link>
                    </li>

                    <li>
                        <Link to="/AjouterRemplacement">AjouterRemplacement</Link>
                    </li>

                    <li>
                        <Link to="/ListeBatteries">ListeBatteries</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Menu;
