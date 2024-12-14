import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import logo from "../assets/img/ima-ams-logo.jpg"; // Logo path
import secretarySignature from "../assets/img/secretary-sign.jpg";
import chairmanSignature from "../assets/img/chairman-sign.png";

const Certificate = ({
  membershipNumber = "LM-12345",
  doctorName = "Dr. John Doe",
  address = "Hyderabad, Telangana",
  branch = "Hyderabad Branch",
  date = "10-Dec-2024",
}) => {
  const exportAsPDF = () => {
    const certificate = document.querySelector(".certificate");
    html2canvas(certificate, {
      scale: 3, // Increase resolution for better clarity
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("portrait", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297); // Fit to A4 dimensions
      pdf.save("certificate.pdf");
    });
  };

  return (
    <div>
        
      <div className="certificate">
        {/* Logo at the top center */}
        <p className="membership-number">Life Membership No: {membershipNumber}</p>
        {logo && <img src={logo} alt="Logo" className="certificate-logo" />}

        <div className="certificate-header">
          <h2>I.M.A. ACADEMY OF MEDICAL SPECIALTIES</h2>
          <h3>Headquarters</h3>
          <p>#105, IMA Building, Esamia Bazar, Koti, Hyderabad, Telangana</p>
        </div>

        <div className="certificate-body">
          
          <p>This is to certify that</p>
          <h3>{doctorName}</h3>
          <p>Resident of</p>
          <h4>{address}</h4>
          <p>is a</p>
          <h2 className="life-member">LIFE MEMBER</h2>
          <p>of the I.M.A. Academy of Medical Specialties</p>
          <p>{branch}</p>
        </div>

        <div className="certificate-footer">
          <div className="signature">
            {chairmanSignature && (
              <img src={chairmanSignature} alt="Chairman Signature" />
            )}
                        <p>Chairman</p>

          </div>
          <div className="signature">
            {secretarySignature && (
              <img src={secretarySignature} alt="Secretary Signature" />
                          )}
                        <p>Hony. Secretary</p>

          </div>
        </div>

        <p className="date">Date: {date}</p>
      </div>

      {/* Export Button */}
      <button className="download-button" onClick={exportAsPDF}>
        Download Certificate
      </button>
    </div>
  );
};

export default Certificate;
