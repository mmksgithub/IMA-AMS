import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Prayer = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow-lg border-0">
        <div className="card-header text-center ">
          <h2 className="m-0"> IMA Prayer</h2>
        </div>
        <div className="card-body">
         
          <p className="salutation-message text-center text-muted fs-5 fw-medium">
          May everybody be happy <br />
May everybody be healthy <br />
May everybody be free from pain <br />
May everybody be free from sorrow <br />
May we be the healing cure <br />
Beyond every greed & lure
</p>

        </div>
      </div>
    </div>
  );
};

export default Prayer;
