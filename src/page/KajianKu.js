import React, { useState, useEffect } from 'react';
import './KajianKu.css'; 

const Kajianku = () => {
  const [kajianList, setKajianList] = useState([]);
  const [newParticipant, setNewParticipant] = useState({ name: '', age: '', address: '' });
  const [selectedKajian, setSelectedKajian] = useState('');
  const [message, setMessage] = useState('');

  const availableKajian = [
    { id: 1, tema: 'Kajian Ahad Pagi', jadwal: 'Ahad, 15 Desember 2024, 06.00 - 07.00' },
    { id: 2, tema: 'Kenali Siapa Nabimu', jadwal: 'Setiap Rabu, 19:0017 Desember 2024, 18.30 - 19.00' },
  ];

  useEffect(() => {
    const storedKajianList = JSON.parse(localStorage.getItem('kajianList'));
    if (storedKajianList) {
      setKajianList(storedKajianList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('kajianList', JSON.stringify(kajianList));
  }, [kajianList]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewParticipant({ ...newParticipant, [name]: value });
  };

  const handleKajianChange = (e) => {
    setSelectedKajian(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newParticipant.name && newParticipant.age && newParticipant.address && selectedKajian) {
      const newEntry = {
        ...newParticipant,
        kajian: selectedKajian,
        id: Date.now(), 
      };
      setKajianList([...kajianList, newEntry]);
      setNewParticipant({ name: '', age: '', address: '' });
      setSelectedKajian('');
      setMessage('Kajian berhasil ditambahkan!');
    } else {
      setMessage('Silakan lengkapi semua data!');
    }
  };

  const handleCancel = (id) => {
    setKajianList(kajianList.filter(kajian => kajian.id !== id));
    setMessage('Kajian berhasil dibatalkan!');
  };

  return (
    <div className="kajianku">

      <section className="introduction">
        <h2>Selamat Datang di Kajianku</h2>
        <p>
          Halaman ini berisi daftar kajian yang Anda ikuti. Anda dapat mendaftar kajian secara online 
          dan mengelola daftar kajian Anda.
        </p>
      </section>

      {kajianList.length === 0 ? (
        <div className="no-kajian">
          <h3>Tidak ada kajian yang diikuti.</h3>
        </div>
      ) : (
        <div className="kajian-list">
          <h3>Daftar Kajian yang Diikuti:</h3>
          <ul>
            {kajianList.map(kajian => (
              <li key={kajian.id}>
                {kajian.kajian} - {kajian.name} ({kajian.age} tahun) - {kajian.address}
                <button className="cancel-button" onClick={() => handleCancel(kajian.id)}>Cancel</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <form className="kajian-form" onSubmit={handleSubmit}>
        <h3>Form Pendaftaran Kajian</h3>
        <input
          type="text"
          name="name"
          placeholder="Nama Lengkap"
          value={newParticipant.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Usia"
          value={newParticipant.age }
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Alamat"
          value={newParticipant.address}
          onChange={handleInputChange}
          required
        />
        <select value={selectedKajian} onChange={handleKajianChange} required>
          <option value="">Pilih Kajian</option>
          {availableKajian.map(kajian => (
            <option key={kajian.id} value={kajian.tema}>{kajian.tema} - {kajian.jadwal}</option>
          ))}
        </select>
        <button type="submit">Daftar Kajian</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Kajianku;