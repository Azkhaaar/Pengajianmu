import React, { useState } from 'react';
import './Kajianmu.css'; 

const KajianMu = () => {
  const [selectedFoto, setSelectedFoto] = useState(null);

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
    {
      id: 3,
      foto: 'Image/Kajian3.jpg', 
      tema: 'Cara Shalat Dalam Himpunan Putusan Tarjih',
      pengisi: 'Ustad Miroj Mustajib',
      jadwal: '6 Oktober 2024, 06.00 - 07.00',
      penjelasan: 'Membawa Infaq Terbaik Dan Datang Lebih Awal',
    },
    {
      id: 4,
      foto: 'Image/Kajian4.jpg', 
      tema: 'Shalat Dan Puasa : Antara Yang Bidah Dan Ibadah',
      pengisi: 'Dr. H. Ruslan Fariadi AM., S.Ag., M.S.I.',
      jadwal: '1 Januari 2025, 19.45 - Selesai',
      penjelasan: 'Kapita Selekta Putusan Dan Fatwa Tarjih',
    },
    {
      id: 5,
      foto: 'Image/Kajian5.jpg', 
      tema: 'Terbawa Arus',
      pengisi: 'Ustadzah Floweria, S.IP',
      jadwal: '8 November 2024, 16.00 - Selesai',
      penjelasan: 'Khusus Untuk Muslimah',
    },
  ];

  const handleFotoClick = (foto) => {
    setSelectedFoto(foto);
  };

  const handleCloseModal = () => {
    setSelectedFoto(null);
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