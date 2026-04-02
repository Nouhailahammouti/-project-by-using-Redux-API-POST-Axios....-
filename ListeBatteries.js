import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./LaptopDetails.css";

const ListeBatteries = () => {

  const Batteries = useSelector(state => state.Laptop.Batteries);
  const batteryStatus = useSelector(state => state.Laptop.BatteryStatus);

  const [filter, setFilter] = useState("");

  // Filter batteries
  const filteredBatteries = Batteries.filter(battery =>
    filter ? battery.Status === filter : true
  );

  // Total
  const total = filteredBatteries.length;

  // Average cycles
  const moyen = total
    ? filteredBatteries.reduce(
        (sum, battery) => sum + battery.CycleCount,
        0
      ) / total
    : 0;

  return (
    <div className="liste-batteries">
      <h1>Liste Batteries</h1>

      <p>Choisir le statut de la batterie</p>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All</option>

        {batteryStatus.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>

      <button onClick={() => setFilter("")}>
        Reset Filter
      </button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Serial</th>
            <th>Status</th>
            <th>Cycle Count</th>
          </tr>
        </thead>

        <tbody>
          {filteredBatteries.map((battery) => (
            <tr key={battery.id}>
              <td>{battery.id}</td>
              <td>{battery.Serial}</td>
              <td>{battery.Status}</td>
              <td>{battery.CycleCount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Total: {total}</p>
      <p>Moyenne: {moyen.toFixed(2)}</p>

    </div>
  );
};

export default ListeBatteries;
