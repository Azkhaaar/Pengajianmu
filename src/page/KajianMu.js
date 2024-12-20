import React, { useState } from 'react';
import './Kajianmu.css'; 

const KajianMu = () => {
  const [selectedFoto, setSelectedFoto] = useState(null); // State untuk menyimpan foto yang dipilih

  const kajianList = [
    {
      id: 1,
      foto: 'image/Kajian1.jpg', 
      tema: 'Kajian Ahad Pagi',
      pengisi: 'Dr.H.A Dahlan Rais, M.Hum',
      jadwal: 'Ahad, 15 Desember 2024, 06.00 - 07.00',
      penjelasan: 'Kajian terbatas hanya untuk 600 jamaah',
    },
    {
      id: 2,
      foto: 'Image/Kajian2.jpg', 
      tema: 'Kenali Siapa Nabimu',
      pengisi: 'Ustad Muhammad Ihsan',
      jadwal: '17 Desember 2024, 18.30 - 19.00',
      penjelasan: 'Pembahasan Kitab Tsalatsatul Ushul',
    },
  ];

  const handleFotoClick = (foto) => {
    setSelectedFoto(foto); // Set foto yang dipilih
  };

  const handleCloseModal = () => {
    setSelectedFoto(null); // Tutup modal
  };

  return (
    <div className="kajianmu">

      <section className="introduction">
        <h2>Selamat Datang di KajianMu</h2>
        <p>
          Halaman ini berisi jadwal kajian yang dapat diikuti oleh jemaah. 
          Kami menyediakan berbagai tema kajian yang bermanfaat untuk meningkatkan 
          pemahaman agama.
        </p>
      </section>

      <section className="kajian-list">
        {kajianList.map(kajian => (
          <div className="kajian-item" key={kajian.id}>
            <div className="kajian-hover" onClick={() => handleFotoClick(kajian.foto)}>
              <img src={kajian.foto} alt={kajian.tema} className="kajian-foto" />
              <h3>{kajian.tema}</h3>
              <p><strong>Pengisi:</strong> {kajian.pengisi}</p>
              <p><strong>Jadwal:</strong> {kajian.jadwal}</p>
              <p><strong>Penjelasan:</strong> {kajian.penjelasan}</p>
            </div>
          </div>
        ))}
      </section>

      {selectedFoto && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedFoto} alt="Foto Kajian" className="modal-foto" />
          </div>
        </div>
      )}

      <section className="information-board">
        <h2>Papan Informasi</h2>
        <p>Informasi terkini mengenai kajian dan kegiatan akan ditampilkan di sini.</p>
      </section>
    </div>
  );
};

export default KajianMu;