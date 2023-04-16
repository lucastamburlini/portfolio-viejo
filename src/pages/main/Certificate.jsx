import React, { useState } from "react";
import { certificates } from "../../data/data";
import "../../styles/certificate.scss";
import Button from "../../components/Button";

const Certificate = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState({});

  const handleOpenModal = (certificate) => {
    setSelectedCertificate(certificate);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCertificate({});
    setModalOpen(false);
  };

  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <section>
      {certificates.map((certificate) => {
        return (
          <div key={certificate.id} className="certificate-container">
            <div
              style={{ backgroundImage: `url(${certificate.imgInstitution})` }}
              className="certificate-institution"
            ></div>
            <div className="certificate-text">
              <h2>{certificate.institution}</h2>
              <p>{certificate.title}</p>
            </div>
            <div className="certificate-button">
              <Button
                
                onClick={() => handleOpenModal(certificate)}
              >Ver certificado</Button>
              {modalOpen && (
                <div className="modal" onClick={handleModalClick}>
                  <div className="modal-content">
                    <span className="close" onClick={handleCloseModal}>
                      &times;
                    </span>
                    <img
                      src={selectedCertificate.imgTitle}
                      alt={selectedCertificate.title}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Certificate;
