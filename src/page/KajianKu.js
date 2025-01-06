import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Import Firestore
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore"; 
import './KajianKu.css'; 

const Kajianku = () => {
  const [kajianList, setKajianList] = useState([]);
  const [newParticipant, setNewParticipant] = useState({ name: '', age: '', address: '', whatsapp: '' }); // Removed foto
  const [selectedKajian, setSelectedKajian] = useState('');
  const [message, setMessage] = useState('');
  const [editingParticipant, setEditingParticipant] = useState(null); // State for the participant being edited

  const availableKajian = [
    { id: 1, tema: 'Kajian Ahad Pagi', jadwal: 'Ahad, 15 Desember 2024, 06.00 - 07.00' },
    { id: 2, tema: 'Kenali Siapa Nabimu', jadwal: 'Setiap Rabu, 17 Desember 2024, 18.30 - 19.00' },
    { id: 3, tema: 'Cara Shalat Dalam Himpunan Putusan Tarjih', jadwal: '6 Oktober 2024, 06.00 - 07.00' },
    { id: 4, tema: 'Shalat Dan Puasa : Antara Yang Bidah Dan Ibadah', jadwal: '1 Januari 2025, 19.45 - Selesai' },
    { id: 5, tema: 'Terbawa Arus', jadwal: '8 November 2024, 16.00 - Selesai' },
  ];

  // Fetch data from Firestore
  useEffect(() => {
    const fetchKajianList = async () => {
      const querySnapshot = await getDocs(collection(db, "kajianList"));
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setKajianList(items);
      console.log("Fetched kajianList:", items); // Log fetched data
    };

    fetchKajianList();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewParticipant({ ...newParticipant, [name]: value });
    console.log("New participant data:", newParticipant); // Log participant data on change
  };

  const handleKajianChange = (e) => {
    setSelectedKajian(e.target.value);
    console.log("Selected kajian:", e.target.value); // Log selected kajian
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", newParticipant); // Log data before submission
    if (newParticipant.name && newParticipant.age && newParticipant.address && newParticipant.whatsapp && selectedKajian) {
        try {
            // Create a new entry without foto
            const newEntry = {
                ...newParticipant,
                kajian: selectedKajian,
            };

            // Add the document to Firestore
            const docRef = await addDoc(collection(db, "kajianList"), newEntry);
            setKajianList([...kajianList, { id: docRef.id, ...newEntry }]);
            resetForm();
            setMessage('Kajian berhasil ditambahkan!');
            console.log("Document added with ID:", docRef.id); // Log document ID
        } catch (error) {
            console.error("Error adding document: ", error);
            setMessage('Terjadi kesalahan saat menambahkan kajian. Silakan coba lagi.');
        }
    } else {
        setMessage('Silahkan lengkapi semua data!');
    }
  };

  const handleEdit = (kajian) => {
    setEditingParticipant(kajian);
    setNewParticipant({ name: kajian.name, age: kajian.age, address: kajian.address, whatsapp: kajian.whatsapp }); // Adjusted for whatsapp
    setSelectedKajian(kajian.kajian);
    console.log("Editing kajian:", kajian); // Log the kajian being edited
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("Updating participant with data:", newParticipant); // Log data before update
    if (newParticipant.name && newParticipant.age && newParticipant.address && newParticipant.whatsapp && selectedKajian) {
      const updatedEntry = { ...newParticipant, kajian: selectedKajian };
      const docRef = doc(db, "kajianList", editingParticipant.id);
      await updateDoc(docRef, updatedEntry);
      const updatedList = kajianList.map(kajian => 
        kajian.id === editingParticipant.id ? { id: editingParticipant.id, ...updatedEntry } : kajian
      );
      setKajianList(updatedList);
      resetForm();
      setEditingParticipant(null);
      setMessage('Kajian berhasil diperbarui!');
      console.log("Updated kajian:", updatedEntry); // Log updated kajian
    } else {
      setMessage('Silahkan lengkapi semua data!');
    }
  };

  const handleCancel = async (id) => {
    const docRef = doc(db, "kajianList", id);
    await deleteDoc(docRef);
    setKajianList(kajianList.filter(kajian => kajian.id !== id));
    setMessage('Kajian berhasil dibatalkan!');
    console.log("Cancelled kajian with ID:", id); // Log cancelled kajian ID
  };

  const resetForm = () => {
    setNewParticipant({ name: '', age: '', address: '', whatsapp: '' }); // Reset whatsapp
    setSelectedKajian('');
    setEditingParticipant(null);
    console.log("Form reset"); // Log form reset
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
          <div className="kajian-items">
            {kajianList.map(kajian => (
              <div className="kajian-item" key={kajian.id}>
                <div className="kajian-hover">
                  <p><strong>Nama:</strong> {kajian.name}</p>
                  <p><strong>Usia:</strong> {kajian.age} tahun</p>
                  <p><strong>Alamat:</strong> {kajian.address}</p>
                  <p><strong>WhatsApp:</strong> {kajian.whatsapp}</p>
                  <p><strong>Kajian:</strong> {kajian.kajian}</p>
                  <button className="cancel-button" onClick={() => handleCancel(kajian.id)}>Batalkan</button>
                  <button className="edit-button" onClick={() => handleEdit(kajian)}>Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={editingParticipant ? handleUpdate : handleSubmit} className="kajian-form">
        <h3>{editingParticipant ? 'Edit Kajian' : 'Daftar Kajian Baru'}</h3>
        <input 
          type="text" 
          name="name" 
          placeholder="Nama" 
          value={newParticipant.name} 
          onChange={handleInputChange} 
          required 
        />
        <input 
          type="number" 
          name="age" 
          placeholder="Usia" 
          value={newParticipant.age} 
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
        <input 
          type="number" 
          name="whatsapp" 
          placeholder="Nomor WhatsApp" 
          value={newParticipant.whatsapp} 
          onChange={handleInputChange} 
          required 
        />
        <select value={selectedKajian} onChange={handleKajianChange} required>
          <option value="">Pilih Kajian</option>
          {availableKajian.map(kajian => (
            <option key={kajian.id} value={kajian.tema}>{kajian.tema}</option>
          ))}
        </select>
        <button type="submit">{editingParticipant ? 'Perbarui Kajian' : 'Daftar Kajian'}</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default Kajianku;