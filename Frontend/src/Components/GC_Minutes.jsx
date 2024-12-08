import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing PDFs
import Pdf1 from "../assets/img/pdfs/33.-Minutes-of-34th-G-C-Meeting-of-IMA-AMS-on-18th-April-2021-at-Hyderabad-Virtual.pdf";

const GC_Minutes = () => {
  // Data for headings and corresponding PDF files
  const pdfData = [
    { heading: "Minutes of 34th GC-Meeting of IMA-AMS on 18th April 2021 at Hyderabad ", file: Pdf1 },
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
          <h2>Download Governing Council Minutes</h2>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-center">
            {pdfData.map((pdf, index) => (
              <div key={index} className="col-md-4">
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

export default GC_Minutes;
