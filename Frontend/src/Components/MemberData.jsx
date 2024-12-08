import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MemberData = () => {
  // Sample data for table
  const memberData = [
    {
      name: "Mujeeb",
      membershipNo: "001",
      branch: "Koti",
      contactNo: "8296064894",
      email: "sas@gmail.com",
    },
    {
      name: "Dasad",
      membershipNo: "dadaaada",
      branch: "Koti",
      contactNo: "8296064894",
      email: "dasad@gmail.com",
    },
    {
      name: "Dasa",
      membershipNo: "daasd",
      branch: "Koti",
      contactNo: "8296064894",
      email: "dasa@gmail.com",
    },
    {
      name: "Dadaas",
      membershipNo: "adasadsda",
      branch: "Koti",
      contactNo: "8296064894",
      email: "dadaas@gmail.com",
    },
    {
      name: "Adsds",
      membershipNo: "adasdas",
      branch: "Issamia",
      contactNo: "8296064894",
      email: "adsds@gmail.com",
    },
    {
        name: "Mujeeb",
        membershipNo: "001",
        branch: "Koti",
        contactNo: "8296064894",
        email: "sas@gmail.com",
      },
      {
        name: "Dasad",
        membershipNo: "dadaaada",
        branch: "Koti",
        contactNo: "8296064894",
        email: "dasad@gmail.com",
      },
      {
        name: "Dasa",
        membershipNo: "daasd",
        branch: "Koti",
        contactNo: "8296064894",
        email: "dasa@gmail.com",
      },
      {
        name: "Dadaas",
        membershipNo: "adasadsda",
        branch: "Koti",
        contactNo: "8296064894",
        email: "dadaas@gmail.com",
      },
      {
        name: "Adsds",
        membershipNo: "adasdas",
        branch: "Issamia",
        contactNo: "8296064894",
        email: "adsds@gmail.com",
      },{
        name: "Mujeeb",
        membershipNo: "001",
        branch: "Koti",
        contactNo: "8296064894",
        email: "sas@gmail.com",
      },
      {
        name: "Dasad",
        membershipNo: "dadaaada",
        branch: "Koti",
        contactNo: "8296064894",
        email: "dasad@gmail.com",
      },
      {
        name: "Dasa",
        membershipNo: "daasd",
        branch: "Koti",
        contactNo: "8296064894",
        email: "dasa@gmail.com",
      },
      {
        name: "Dadaas",
        membershipNo: "adasadsda",
        branch: "Koti",
        contactNo: "8296064894",
        email: "dadaas@gmail.com",
      },
      {
        name: "Adsds",
        membershipNo: "adasdas",
        branch: "Issamia",
        contactNo: "8296064894",
        email: "adsds@gmail.com",
      },
    // More members as needed
  ];

  return (
    <div className="container-fluid px-0">
      <div className="card shadow-lg rounded">
        <div className="card-header">
          <h3> Members Details</h3>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Member Name</th>
                  <th>Membership No</th>
                  <th>Member Branch</th>
                  <th>Contact No</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {memberData.map((member, index) => (
                  <tr key={index}>
                    <td>{member.name}</td>
                    <td>{member.membershipNo}</td>
                    <td>{member.branch}</td>
                    <td>{member.contactNo}</td>
                    <td>{member.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberData;
