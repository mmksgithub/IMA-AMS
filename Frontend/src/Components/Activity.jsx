import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing PDFs
import Pdf1 from "../assets/img/pdfs/Annual-Report-of-IMA-AMS-HQrs-From-1st-Jan-2021-to-31-Dec-2021.pdf";
import Pdf2 from "../assets/img/pdfs/Activity-Report-of-IMA-AMS-HQrs-as-on-30-11-2022.pdf";
import Pdf3 from "../assets/img/pdfs/Annual-Report-of-IMA-AMS-HQrs-1st-January-23-to-8th-Dec-2023-.pdf";


const Activity = () => {
  // Data for headings and corresponding PDF files
  const pdfData = [
    { heading: "Activity Report of IMA-AMS-HQRS 2021", file: Pdf1 },
    { heading: "Activity Report of IMA-AMS-HQRS 2022", file: Pdf2 },
    { heading: "Activity Report of IMA-AMS-HQRS 2023", file: Pdf3 },
  
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
          <h2> Download IMA - AMS Hqrs Activity Reports</h2>
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

export default Activity;
