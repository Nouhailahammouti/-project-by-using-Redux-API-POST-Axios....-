import React from 'react';
import { useSelector } from 'react-redux';
import './LaptopDetails.css'


const LaptopDetails = () => {
    const Laptop = useSelector(state => state.Laptop);

    // Safety check in case Redux state isn't loaded yet
 

    return (
        <div className="laptop-container">
            <h1>Laptop Info</h1>
            <p><strong>ID:</strong> {Laptop.id}</p>
            <p><strong>Serial Number:</strong> {Laptop.SerialNumber}</p>
            <p><strong>Last Maintenance:</strong> {Laptop.LastMaintenance}</p>
            <p><strong>Next Maintenance:</strong> {Laptop.NextMaintenance}</p>

            <h1>Current Battery</h1>
            <div className="battery-section">
                <p><strong>ID:</strong> {Laptop.CurrentBattery.Id}</p>
                <p><strong>Capacity:</strong> {Laptop.CurrentBattery.Capacity}</p>
                <p><strong>Serial:</strong> {Laptop.CurrentBattery.Serial}</p>
                <p><strong>Health:</strong> {Laptop.CurrentBattery.Health}%</p>
                <p><strong>Cycle Count:</strong> {Laptop.CurrentBattery.CycleCount}</p>
                <p><strong>Status:</strong> <span className="status-good">{Laptop.CurrentBattery.Status}</span></p>
            </div>
        </div>
    );
};

export default LaptopDetails;
