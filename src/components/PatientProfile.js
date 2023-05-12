import React from 'react';
import '../App.css';

const PatientProfile = (props) => {
  const { name, age, gender, address, phone, pesel, photo, email, diseases, allergies } = props;

  return (
    <div className="profile-container">
      <div className="patient-profile">
        <div className="profile-header">
          <div className="profile-photo">
            <img src={photo} alt={name} />
          </div>
          <div className="profile-name">
            <h2>{name}</h2>
          </div>
        </div>
        <div className="profile-details">
          <h3>Szczegóły pacjenta</h3>
          <p className="profile-detail">Imię i nazwisko: <span className="detail-value">{name}</span></p>
          <p className="profile-detail">Wiek: <span className="detail-value">{age}</span></p>
          <p className="profile-detail">Pesel: <span className="detail-value">{pesel}</span></p>
          <p className="profile-detail">Płeć: <span className="detail-value">{gender}</span></p>
          <p className="profile-detail">Adres: <span className="detail-value">{address}</span></p>
          <p className="profile-detail">Numer telefonu: <span className="detail-value">{phone}</span></p>
          <p className="profile-detail">Adres e-mail: <span className="detail-value">{email}</span></p>
          <hr></hr>
          <p className="profile-detail">Choroby: <span className="detail-value">{diseases}</span></p>
          <p className="profile-detail">Alergie: <span className="detail-value">{allergies}</span></p>
          <p className="profile-detail">Leki: <span className="detail-value">Brak</span></p>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
