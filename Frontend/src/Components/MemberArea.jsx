import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MemberArea = () => {
  return (
    <div className="member-search-container">
      {/* Full-Width Form */}
      <div className="member-search-card" data-aos="fade-up">
        {/* Form Heading */}
        <h2 className="member-search-title">IMA-AMS Members - Member Area</h2>
<hr />      
<br />  {/* Form */}
        <form className="member-search-form">
          {/* Member Name */}
          <div className="form-group">
            <label htmlFor="memberName" className="form-label">
              Member Name
            </label>
            <input
              type="text"
              className="form-control"
              id="memberName"
              placeholder="Enter member's name"
            />
          </div>
<br />
          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter phone number"
            />
          </div>
<br />
          {/* Membership Number */}
          <div className="form-group">
            <label htmlFor="membershipNumber" className="form-label">
              Membership Number
            </label>
            <input
              type="text"
              className="form-control"
              id="membershipNumber"
              placeholder="Enter membership number"
            />
          </div>
          <br />

          {/* Branch Selection */}
          <div className="form-group">
            <label htmlFor="branch" className="form-label">
              Branch
            </label>
            <select className="form-control" id="branch">
              <option value="" disabled selected>
                Select branch
              </option>
              <option value="branch1">Branch 1</option>
              <option value="branch2">Branch 2</option>
              <option value="branch3">Branch 3</option>
            </select>
          </div>

          {/* Search Button */}
          <button type="submit" className="btn btn-primary btn-block mt-4">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default MemberArea;
