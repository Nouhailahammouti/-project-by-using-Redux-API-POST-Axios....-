import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  Laptop: {
    id: 101,
    SerialNumber: "LTP-5567",
    LastMaintenance: "2026-03-01",
    NextMaintenance: "2026-06-01",
    CurrentBattery: {
      Id: 501,
      Capacity: 80,
      Serial: "BAT-LTP-01",
      Health: 92,
      CycleCount: 1200,
      Status: "In Use"
    },
    Technicians: [
      { id: 1, Name: "Alice" },
      { id: 2, Name: "Bob" }
    ],
    Batteries: [
      { id: 501, Serial: "BAT-LTP-01", Status: "In Use", CycleCount: 1200 },
      { id: 502, Serial: "BAT-LTP-02", Status: "In Stock", CycleCount: 0 }
    ],
    BatteryStatus: ["In Stock", "In Use", "Retired"]
  }
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export const store = configureStore({ reducer });
