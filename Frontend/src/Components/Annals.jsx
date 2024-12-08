import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing PDFs
import Pdf1 from "../assets/img/pdfs/IMA AMS E-Annals 2021 (Covid-19).pdf";
import Pdf2 from "../assets/img/pdfs/IMA AMS E-Annals-2022 (Surgical Emergencies).pdf";
import Pdf3 from "../assets/img/pdfs/IMA AMS E-Annals-2022 (Monograph on Epilepsy).pdf";
import Pdf4 from "../assets/img/pdfs/IMA AMS E-Annals-2022 (Medical Emergencies).pdf";
import Pdf5 from "../assets/img/pdfs/IM AMS E-Annals 2023 (Acute Coronary Syndrome).pdf";
import Pdf6 from "../assets/img/pdfs/IMA AMS E-Annals-2023 (Geriatric Medicine).pdf";
import Pdf7 from "../assets/img/pdfs/IMA AMS E-Annals 2024 (Endocrinology).pdf";

const Annals = () => {
  // Data for headings and corresponding PDF files
  const pdfData = [
    { heading: "IMA-AMS E-Annals 2021 (Covid-19)", file: Pdf1 },
    { heading: "IMA-AMS E-Annals 2022 (Surgical Emergencies)", file: Pdf2 },
    { heading: "IMA-AMS E-Annals 2022 (Monograph on Epilepsy)", file: Pdf3 },
    { heading: "IMA-AMS E-Annals 2022 (Medical Emergencies)", file: Pdf4 },
    { heading: "IMA-AMS E-Annals 2023 (Acute Coronary Syndrome)", file: Pdf5 },
    { heading: "IMA-AMS E-Annals 2023 (Geriatric Medicine)", file: Pdf6 },
    { heading: "IMA-AMS E-Annals 2024 (Endocrinology)", file: Pdf7 },
  ];

  // Function to handle PDF preview
  const handleViewAndDownload = (file) => {
    // Open PDF in a new tab
    const newWindow = window.open(file, "_blank");
    if (!newWindow) {
      alert("Please allow pop-ups for this website to view the PDF.");
      return;
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow-lg">
        <div className="card-header text-center">
          <h2>Download Annals</h2>
        </div>
        <div className="card-body">
          <div className="row">
            {pdfData.map((pdf, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title">{pdf.heading}</h5>
                    <button
                      className="btn download-button w-100"
                      onClick={() => handleViewAndDownload(pdf.file)}
                    >
                      View/Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Annals;
