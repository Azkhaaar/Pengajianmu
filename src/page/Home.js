import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home">
      <section className="introduction">
        <h2>PengajianMu</h2>
        <p>
          PengajianMu adalah platform yang menyediakan berbagai kajian dan informasi seputar kegiatan keagamaan, 
          khususnya dalam konteks Muhammadiyah. Kami berkomitmen untuk memberikan pengetahuan yang bermanfaat 
          bagi masyarakat.
        </p>
      </section>

      <section className="vision-mission">
        <h2>Visi dan Misi</h2>
        <p>
          Visi kami adalah menjadi pusat kajian yang terpercaya dan bermanfaat bagi umat. Misi kami adalah 
          menyebarkan pengetahuan agama yang benar dan mendukung kegiatan keagamaan di masyarakat.
        </p>
      </section>

      <section className="goals">
        <h2>Tujuan PengajianMu</h2>
        <ul>
          <li>Meningkatkan pemahaman agama di kalangan masyarakat.</li>
          <li>Menjadi wadah diskusi dan kajian keagamaan.</li>
          <li>Memberikan informasi terkini mengenai kegiatan keagamaan.</li>
        </ul>
      </section>

      <section className="information-board">
        <h2>Papan Informasi</h2>
        <p>Informasi terkini mengenai kajian dan kegiatan akan ditampilkan di sini.</p>
      </section>
    </div>
  );
};

export default Home;