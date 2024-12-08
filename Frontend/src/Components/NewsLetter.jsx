import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing PDFs
import Pdf1 from "../assets/img/pdfs/1st EDITION IMA AMS NEWSLETTER 2023.pdf";
import Pdf2 from "../assets/img/pdfs/2nd  EDITION IMA AMS NEWSLETTER 2023.pdf";
import Pdf3 from "../assets/img/pdfs/3rd EDITION IMA AMS NEWSLETTER-2023.pdf";
import Pdf4 from "../assets/img/pdfs/4th  EDITION IMA AMS NEWSLETTER 2023.pdf";
import Pdf5 from "../assets/img/pdfs/5th EDITION IMA AMS NEWSLETTER 2023.pdf";
import Pdf6 from "../assets/img/pdfs/6th EDITION  IMA AMS NEWSLETTER 2023.pdf";
import Pdf7 from "../assets/img/pdfs/7th EDITION IMA AMS NEWSLETTER 2024.pdf";

const NewsLetter = () => {
  // Data for headings and corresponding PDF files
  const pdfData = [
    { heading: "1st IMA AMS Newsletter", file: Pdf1 },
    { heading: "2nd IMA AMS Newsletter", file: Pdf2 },
    { heading: "3rd IMA AMS Newsletter", file: Pdf3 },
    { heading: "4th IMA AMS Newsletter", file: Pdf4 },
    { heading: "5th IMA AMS Newsletter", file: Pdf5 },
    { heading: "6th IMA AMS Newsletter", file: Pdf6 },
    { heading: "7th IMA AMS Newsletter", file: Pdf7 },
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
          <h2>Download Newsletters</h2>
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

export default NewsLetter;
