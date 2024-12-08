import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Salutation = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow-lg border-0">
        <div className="card-header text-center ">
          <h2 className="m-0"> IMA Flag Salutation (Live to Serve)</h2>
        </div>
        <div className="card-body">
          <p className="salutation-text text-center fs-5">
          Any meeting of IMA shall start with IMA Prayer. <br />
          One of the office bearers should lead the Prayer.          </p>
          <p className="salutation-message text-center text-muted fs-5 fw-medium">
  We, The members of the Indian Medical Association stand here to salute our National Flag. <br />
  Its honour and glory shall be our light and strength and its course shall be our course. <br />
  We pledge our allegiance to it and realizing our responsibilities as the accredited members of this national organisation, <br />
  We swear, 
  We will dedicate everything in our power to see it fly high in the comity of nations. <br />

  <strong>Jai Hind!</strong>
</p>

        </div>
      </div>
    </div>
  );
};

export default Salutation;
