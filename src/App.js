import React from 'react';
import PatientProfile from './components/PatientProfile';

const patient = {
  name: 'Jan Kowalski',
  age: 35,
  gender: 'Mężczyzna',
  address: 'ul. Testowa 1, 00-000 Warszawa',
  phone: '+48 123 456 789',
  pesel: '12345678901',
  photo: 'https://cdn1.iconfinder.com/data/icons/doctor-5/100/01-1Patient_1-512.png',
  email: 'Pawkowal@yuhuu.com',
  diseases: "Cukrzyca, nadciśnienie, astma",
  allergies: "Pyłki, kurz, sierść zwierząt",
};

function App() {
  return (
    <div className="App">
      <PatientProfile {...patient} />
    </div>
  );
}

export default App;
