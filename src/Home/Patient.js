import React, { useState } from "react";
import "./Patient.css";
import patientsData from "../patientData.json";

function Patient() {
  const [selectedPatients, setSelectedPatients] = useState([]);

  const handleCheckboxChange = (patientId) => {
    setSelectedPatients((prevSelectedPatients) => {
      if (prevSelectedPatients.includes(patientId)) {
        return prevSelectedPatients.filter((id) => id !== patientId);
      } else {
        return [...prevSelectedPatients, patientId];
      }
    });
  };

  const handleDeletePatient = () => {
    
    const updatedPatientsData = Object.fromEntries(
      Object.entries(patientsData).map(([id, patients]) => [
        id,
        patients.filter((patient) => !selectedPatients.includes(patient.id)),
      ])
    );

   
    console.log("Deleting patients:", selectedPatients);
    console.log("Updated patientsData:", updatedPatientsData);

    setSelectedPatients([]);
  };

  return (
    <>
      <div className="patient__heading">
        <div className="select__head">Select</div>
        <div className="name__head">Name</div>
        <div className="age__head">Age</div>
        <div className="history__head">History</div>
      </div>
      <div className="patient__main">
        {Object.entries(patientsData).map(([id, patients]) => (
          <div className="patient__details" key={id}>
            <div className="allname__details">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(id)}
                checked={selectedPatients.includes(id)}
              />
              {patients.map((patient, index) => (
                <div key={index} className="name__item">
                  {patient.name}
                </div>
              ))}
              {patients.map((patient, index) => (
                <div key={index} className="name__item">
                  {patient.age}
                </div>
              ))}
              {patients.map((patient, index) => (
                <div key={index} className="name__item">
                  {patient.history}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="add__patientbtn">Add Patient</button>
      <button className="add__patientbtn" onClick={handleDeletePatient}>
        Delete Patient
      </button>
    </>
  );
}

export default Patient;
