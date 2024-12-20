import React from 'react';
import './About.css';

const About = () => {
  const faqs = [
    {
      question: "Apa itu PengajianMu?",
      answer: "PengajianMu adalah platform yang menyediakan berbagai kajian dan informasi seputar kegiatan keagamaan, khususnya dalam konteks Muhammadiyah."
    },
    {
      question: "Bagaimana cara mendaftar kajian?",
      answer: "Anda dapat mendaftar kajian dengan mengisi form pendaftaran yang tersedia di halaman Kajianku, atau langsung mendaftar kajian dengan mendatangi langsung tempat kajian yang tersedia."
    },
    {
      question: "Apakah ada biaya untuk mengikuti kajian?",
      answer: "Tidak, semua kajian yang kami tawarkan adalah gratis untuk diikuti oleh jemaah."
    },
    {
      question: "Bagaimana cara membatalkan pendaftaran kajian?",
      answer: "Anda dapat membatalkan pendaftaran kajian melalui halaman Kajianku dengan mengklik tombol 'Cancel' pada kajian yang ingin dibatalkan."
    },
    {
      question: "Apakah saya bisa mengikuti lebih dari satu kajian?",
      answer: "Ya, Anda dapat mengikuti sebanyak mungkin kajian yang Anda inginkan."
    },
    {
      question: "Bagaimana cara menghubungi tim PengajianMu?",
      answer: "Anda dapat menghubungi kami melalui email di info@pengajianmu.com atau melalui media sosial kami."
    },
  ];

  return (
    <div className="about">

      <section className="faq-section">
        <h2>Pertanyaan yang Sering Diajukan (FAQ)</h2>
        <ul className="faq-list">
          {faqs.map((faq, index) => (
            <li key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;